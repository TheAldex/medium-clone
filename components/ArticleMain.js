import Image from "next/image";
import Qazi from "../static/qazi.jpg";
import Banner from "../static/banner.png";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

const styles = {
  wrapper: "flex items-center justify-center flex-[3] border-l border-r",
  content: "h-screen w-full p-[2rem]",
  postHeaderContainer:
    "flex justify-between items-center mt-[2.2rem] mb-[1.2rem]",
  authorContainer: "flex gap-[1rem]",
  authorProfileImageContainer:
    "h-[3rem] w-[3rem] grid center rounded-full overflow-hidden",
  column: "flex-1 flex flex-col justify-center",
  postDetails: "flex gap-[1.2rem] text-[#787878]",
  listenButton: "flex items-center gap-[.2rem] text-[#1A8917]",
  socials: "flex gap-[1rem] text-[#787878] cursor-pointer",
  bannerContainer: "h-[18rem] w-full grid center overflow-hidden mb-[2rem]",
  articleMainContainer: "flex flex-col gap-[1rem]",
  image: "object-cover",
  title: "font-bold text-4xl",
  subtitle: "font-mediumSerifItalic text-[1.4rem] text-[#787878]",
  articleText: "font-mediumSerif text-[1.4rem] text-[#292929]",
};

const ArticleMain = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorProfileImageContainer}>
              <Image
                src={Qazi}
                alt="profile-image"
                width={100}
                height={100}
                className="object-cover"
              />
            </div>
            <div className={styles.column}>
              <div>Alejandro Delgado</div>
              <div className={styles.postDetails}>
                <span>June 15 • 7 min read</span>
                <span className={styles.listenButton}>
                  <AiFillPlayCircle /> Listen
                </span>
              </div>
            </div>
          </div>
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className="w-[.5rem]" />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>
        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image src={Banner} alt="banner" className={styles.image} />
          </div>
          <h1 className={styles.title}>
            The Quantum Theory: A Brand New World
          </h1>
          <h4 className={styles.subtitle}>
            <div>Alejandro Delgado, June 15, 2023</div>
            <div>
              Brief: An Introduction to the world of atomic particles and laws.
            </div>
          </h4>
          <div className={styles.articleText}>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleMain;
