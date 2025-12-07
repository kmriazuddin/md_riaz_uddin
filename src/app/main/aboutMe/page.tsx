import Image from "next/image";
import { FaCode, FaHandshake } from "react-icons/fa";
import { MdVerticalAlignTop } from "react-icons/md";
import { SiNextui } from "react-icons/si";

const AboutMe = () => {
  return (
    <div className="relative overflow-hidden py-10 md:py-20 px-6 z-10">
      <div className="absolute inset-0 -z-10 bg-white dark:bg-slate-950">
        {/* Left radial gradient */}
        <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

        {/* Right radial gradient */}
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="border rounded-md h-full border-slate-500">
          <div className="p-3 h-full flex flex-col">
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="w-24 md:w-36 rounded">
                  <Image
                    src="https://i.ibb.co.com/KxvjmqHC/IMG-20241013-1448231-min.jpg"
                    width={800}
                    height={800}
                    alt="Md Riaz Uddin"
                    className="grayscale hover:grayscale-0 transition duration-500 cursor-pointer"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-2xl text-slate-900 dark:text-white">
                  Md Riaz Uddin
                </h1>
                <p className="text-slate-900 dark:text-white text-xs md:text-lg">
                  mohammadriazuddin3@gmail.com
                </p>
              </div>
            </div>
            <div className="space-y-3 mt-4 text-slate-900 dark:text-white">
              <p>
                I am a front-end developer who loves building practical and
                meaningful solutions that work in real life. I primarily work
                with JavaScript, TypeScript, React.js, Next.js, Node.js,
                Express, PostgreSQL, Prisma, and MongoDB.
              </p>
              <p>
                I have worked on several projects where I had to deal with
                strict deadlines, technical bugs, unexpected changes, and
                various real-world challenges. Deployment-related issues were
                also a regular part of the process. These experiences taught me
                to stay organized, communicate clearly, deliver effective
                features without unnecessary complexity, and adapt quickly to
                changing situations.
              </p>
              <p>
                I am still learning, growing, and improving every day. With
                every new project, I strive to work more smoothly, efficiently,
                and professionally than before. Creating things that people can
                genuinely use is what inspires me the most.
              </p>
            </div>
            <div className="grow"></div>
          </div>
        </div>

        <div className="h-full flex text-slate-900 dark:text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full h-full">
            <div className="relative group">
              <div className="p-6 md:p-3 bg-linear-to-t hover:from-fuchsia-400/30 to-transparent transition duration-300 hover:cursor-pointer border border-slate-400 rounded-t-lg md:rounded-t-none md:rounded-tl-lg h-full flex flex-col justify-center items-center">
                <div className="text-left">
                  <div className="space-y-2">
                    <SiNextui size={20} />
                    <h3 className="font-semibold text-lg transition-all duration-300 group-hover:ml-2">
                      Frontend Focus
                    </h3>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-all duration-300 mt-1">
                    I build APIs and databases that are simple to use and easy
                    to maintain.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="p-6 md:p-3 bg-linear-to-t hover:from-fuchsia-400/30 to-transparent transition duration-300 hover:cursor-pointer border md:rounded-tr-lg border-slate-400 h-full flex flex-col justify-center items-center">
                <div className="text-left">
                  <div className="space-y-2">
                    <FaHandshake size={20} />
                    <h3 className="font-semibold text-lg transition-all duration-300 group-hover:ml-2">
                      Good Communication
                    </h3>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-all duration-300 mt-1">
                    I ask the right questions and keep everyone aligned during
                    development.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="p-6 md:p-3 bg-linear-to-b hover:from-fuchsia-400/30 to-transparent transition duration-300 hover:cursor-pointer border md:rounded-bl-lg border-slate-400 h-full flex flex-col justify-center items-center">
                <div className="text-left">
                  <div className="space-y-2">
                    <FaCode size={20} />
                    <h3 className="font-semibold text-lg transition-all duration-300 group-hover:ml-2">
                      Problem Solver
                    </h3>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-all duration-300 mt-1">
                    I prefer practical solutions over complexity and
                    over-engineering.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="p-6 md:p-3 bg-linear-to-b hover:from-fuchsia-400/30 to-transparent transition duration-300 hover:cursor-pointer border rounded-b-lg md:rounded-b-none md:rounded-br-lg border-slate-400 h-full flex flex-col justify-center items-center">
                <div className="text-left">
                  <div className="space-y-2">
                    <MdVerticalAlignTop size={20} />
                    <h3 className="font-semibold text-lg transition-all duration-300 group-hover:ml-2">
                      Always Improving
                    </h3>
                  </div>
                  <p className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-all duration-300 mt-1">
                    I want each project I work on to be smoother and better than
                    the last one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
