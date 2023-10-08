import Header from "../components/Header";
import Banner from "../components/Banner";
import PostCard from "../components/PostCard";
import { useContext } from "react";
import { MediumContext } from "../context/MediumContext";

export default function Home() {
  const { posts } = useContext(MediumContext);

  console.log(posts);

  return (
    <div className="mx-auto">
      <Header />
      <Banner />
      <div className="flex justify-center">
        <div className="max-w-7xl flex-1">
          <div className="flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
