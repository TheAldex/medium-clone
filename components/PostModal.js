import { useContext, useState } from "react";
import { MediumContext } from "../context/MediumContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/router";

const styles = {
  wrapper:
    "w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif",
  title: "my-[2rem] font-bold text-3xl",
  smallField: "w-full flex justify-between gap-[1rem]",
  fieldTitle: "flex-1 text-end",
  inputContainer: "flex-[5] h-min border-2 border-[#787878]",
  inputField: "w-full border-0 outline-none bg-transparent",
  accentedButton: "bg-black text-white py-2 px-4 rounded-full",
};

const PostModal = () => {
  const router = useRouter();
  const { currentUser } = useContext(MediumContext);

  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [category, setCategory] = useState("");
  const [postLength, setPostLength] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [body, setBody] = useState("");

  const addPostToFirebase = async (event) => {
    event.preventDefault();

    await addDoc(collection(db, "articles"), {
      title: title,
      brief: brief,
      category: category,
      postLength: Number(postLength),
      bannerImage: bannerImage,
      author: currentUser.email,
      body: body,
      postedOn: serverTimestamp(),
    });

    router.push("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Create a New Post</div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Title</span>
        <span className={styles.inputContainer}>
          <input
            type="text"
            className={styles.inputField}
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Brief</span>
        <span className={styles.inputContainer}>
          <input
            type="text"
            className={styles.inputField}
            value={brief}
            onChange={(event) => setBrief(event.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Banner Image (URL)</span>
        <span className={styles.inputContainer}>
          <input
            type="text"
            className={styles.inputField}
            value={bannerImage}
            onChange={(event) => setBannerImage(event.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Category</span>
        <span className={styles.inputContainer}>
          <input
            type="text"
            className={styles.inputField}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>
          Estimated Read Length (in minutes)
        </span>
        <span className={styles.inputContainer}>
          <input
            type="text"
            className={styles.inputField}
            value={postLength}
            onChange={(event) => setPostLength(event.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Article Text</span>
        <span className={styles.inputContainer}>
          <textarea
            type="text"
            className={styles.inputField}
            value={body}
            onChange={(event) => setBody(event.target.value)}
            rows={12}
          />
        </span>
      </div>

      <button className={styles.accentedButton} onClick={addPostToFirebase}>
        Create Article
      </button>
    </div>
  );
};

export default PostModal;
