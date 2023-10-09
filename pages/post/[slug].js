// DYNAMIC FILE
import { useContext, useEffect, useState } from "react";
import ReadersNav from "../../components/ReadersNav";
import Recommendations from "../../components/Recommendations";
import ArticleMain from "../../components/ArticleMain";
import { MediumContext } from "../../context/MediumContext";
import { useRouter } from "next/router";

const Post = () => {
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);
  const { posts, users } = useContext(MediumContext);
  const router = useRouter();

  useEffect(() => {
    // guard clause
    if (posts.length === 0) {
      return;
    }
    // getting a certain post
    setPost(posts.find((post) => post.id === router.query.slug));
    // getting the prev post author
    setAuthor(users.find((user) => user.id === post?.data?.author));
  }, [post]);

  return (
    <div className="flex">
      <ReadersNav />
      <ArticleMain post={post} author={author} />
      <Recommendations />
    </div>
  );
};

export default Post;
