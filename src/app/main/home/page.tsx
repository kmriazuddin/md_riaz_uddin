import Image from "next/image";
import { codingImageUrl } from "../../../../public/imageUrl";
import { FcIdea } from "react-icons/fc";

const HomePage = () => {
  return (
    <div className="relative px-10">
      {/* background */}
      {/* <div
        className="absolute inset-0 -z-10 bg-white dark:bg-slate-900
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
  bg-size-[14px_24px]"
      ></div>
      <div className="absolute top-10 left-10 -z-10 rounded-full bg-fuchsia-400 opacity-20 blur-[100px] w-96 h-96"></div> */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-10 max-w-7xl mx-auto">
        <div>
          <Image
            src={codingImageUrl}
            width={800}
            height={500}
            alt="Programming"
            className="rounded-md"
          />
        </div>

        <div className="text-center md:text-start space-y-8">
          <button className="flex items-center gap-2 p-2 bg-slate-800 rounded-md dancing-script text-lg md:text-xl">
            <FcIdea className="text-2xl" />
            Turning Concepts Into Digital Innovation
          </button>

          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold bebas-neue tracking-wider text-slate-950 dark:text-white">
            {`Hi, I'm Md Riaz Uddin`}
          </h1>

          <p className="text-md md:text-lg text-justify text-slate-950 dark:text-white">
            I am a skilled full-stack developer with a strong focus on delivering exceptional front-end experiences and reliable back-end solutions. I specialize in building robust and scalable web applications, combining technical expertise with a keen eye for design and usability to create seamless, high-quality digital products.
          </p>

          <p className="text-md md:text-lg text-justify text-slate-950 dark:text-white leading-8">
            Building with{" "}
            <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-md p-1 text-white">
              TypeScript, PostgreSQL, Prisma, Express, Mongoose,
            </span>{" "}
            and{" "}
            <span className="bg-linear-to-r from-[#58c4dc] to-[#000000] rounded-md p-1 text-white">
              React | Next.js
            </span>{" "}
            | Currently working as a backend-focused full stack developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
