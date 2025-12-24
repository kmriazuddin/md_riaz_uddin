import Image from "next/image";
import { FcIdea } from "react-icons/fc";

const HomePage = () => {
  return (
    <div className="relative overflow-hidden py-20 lg:py-28 px-6 md:px-10 z-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px), linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="absolute left-1/2 top-10 -z-10 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-fuchsia-400 opacity-20 blur-[120px]"></div>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Image Section */}
        <div className="w-96 md:w-7xl">
          {/* Image with src "/programmer.png" was detected as the Largest Contentful Paint (LCP). Please add the `loading="eager"` property if this image is above the fold. */}
          <Image
            src="/programmer.png"
            width={600}
            height={600}
            alt="programmer"
            className="rounded-md"
            loading="eager"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-start space-y-8">
          <button className="flex items-center gap-2 p-2 bg-slate-800 text-white rounded-md dancing-script text-lg md:text-xl">
            <FcIdea className="text-2xl" />
            Turning Concepts Into Digital Innovation
          </button>

          <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold bebas-neue tracking-wider text-slate-950 dark:text-white">
            {`Hi, I'm Md Riaz Uddin`}
          </h1>

          <p className="text-md md:text-lg text-justify text-slate-950 dark:text-white">
            I am a skilled full-stack developer with a strong focus on
            delivering exceptional front-end experiences and reliable back-end
            solutions. I specialize in building robust and scalable web
            applications, combining technical expertise with a keen eye for
            design and usability to create seamless, high-quality digital
            products...
          </p>

          <p className="text-md md:text-lg text-justify text-slate-950 dark:text-white leading-8">
            Building with{" "}
            <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-md px-1 text-white">
              TypeScript, PostgreSQL, Prisma, Express, Mongoose,
            </span>{" "}
            and{" "}
            <span className="bg-linear-to-r from-[#58c4dc] to-[#000000] rounded-md px-1 text-white">
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
