import Image from "next/image";
import { FiBookmark } from "react-icons/fi";
import Logo from "../static/logo.png";

const styles = {
  authorContainer: "flex gap-[.4rem]",
  authorImageContainer:
    "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
  authorImage: "object-cover",
  authorName: "font-semibold ",
  title: "font-bold text-2xl",
  briefing: "text-[#787878]",
  detailsContainer: "flex items-center justify-between text-[#787878]",
  articleDeatils: "my-2 text-[.8rem]",
  category: "bg-[#F2F3F2] p-1 rounded-full",
  bookmarkContainer: "cursor-pointer",
  thumbnailContainer: "",
  postDetails: "flex-[2.5] flex flex-col",
  wrapper: "flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer",
};

const PostCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.postDetails}>
        <div className={styles.authorContainer}>
          <div className={styles.authorImageContainer}>
            <Image
              src={Logo}
              alt=""
              className={styles.authorImage}
              width={40}
              height={40}
            />
          </div>
          <div className={styles.authorName}>Alejandro Delgado</div>
        </div>
        <h1 className={styles.title}>The Quantum Theory: A Brand New World</h1>
        <div className={styles.briefing}>
          Come discover the amazing and misterious quantum word.
        </div>
        <div className={styles.detailsContainer}>
          <span className={styles.articleDeatils}>
            Jun 15 • 13 min read •{" "}
            <span className={styles.category}>Science</span>
          </span>
          <span className={styles.bookmarkContainer}>
            <FiBookmark className="w-5 h-5" />
          </span>
        </div>
      </div>
      <div className={styles.thumbnailContainer}>
        <Image src={Logo} alt="" height={100} width={100} />
      </div>
    </div>
  );
};

export default PostCard;
