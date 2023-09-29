import Image from "next/image";
import Logo from "./../static/banner.png";

const Banner = () => {
  return (
    <div className="h-max-[10rem] flex items-center justify-center bg-[#FCC017] border-y border-black">
      <div className="max-w-7xl flex-1 flex items-center justify-between">
        <div className="space-y-5 px-10 flex-[3]">
          <h1 className="max-w-xl text-[6rem] font-mediumSerif">
            Stay Curious.
          </h1>
          <h3 className="text-2xl">
            Discover stories, thinking and expertise from writers on any topic.
          </h3>
          <button className="btn bg-black text-white py-2 px-4 rounded-full">
            Start Reading
          </button>
        </div>
        <Image
          className="hidden md:inline-flex object-contain flex-1 py-10"
          src={Logo}
          alt="banner-image"
          width={500}
          height={400}
        />
      </div>
    </div>
  );
};

export default Banner;
