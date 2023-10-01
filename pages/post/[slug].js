// DYNAMIC FILE
import ReadersNav from "../../components/ReadersNav";
import Recommendations from "../../components/Recommendations";
import ArticleMain from "../../components/ArticleMain";

const Post = () => {
  return (
    <div className="flex">
      <ReadersNav />
      <ArticleMain />
      <Recommendations />
    </div>
  );
};

export default Post;
