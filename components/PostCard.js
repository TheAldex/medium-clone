import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiBookmark } from "react-icons/fi";
import Logo from "../static/logo.png";

import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

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
  thumbnailContainer: "flex-1",
  postDetails: "flex-[2.5] flex flex-col",
  wrapper:
    "flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer",
};

const PostCard = ({ post }) => {
  const [authorData, setauthorData] = useState(null);

  useEffect(() => {
    const getAuthorData = async () => {
      setauthorData((await getDoc(doc(db, "users", post.data.author))).data());
    };

    getAuthorData();
  }, [post]);

  return (
    <Link href={`/post/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                src={Logo}
                alt="author-image"
                className={styles.authorImage}
                width={40}
                height={40}
              />
            </div>
            <div className={styles.authorName}>{authorData?.name}</div>
          </div>
          <h1 className={styles.title}>{post?.data?.title}</h1>
          <div className={styles.briefing}>{post?.data?.brief}</div>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDeatils}>
              {new Date(post.data.postedOn).toLocaleString("en-US", {
                day: "numeric",
                month: "short",
              })}{" "}
              • {post.data.postLength} min read •{" "}
              <span className={styles.category}>{post.data.category}</span>
            </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className="w-5 h-5" />
            </span>
          </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
            alt={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
            height={100}
            width={100}
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
