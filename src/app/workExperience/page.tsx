import Image from "next/image";
import autofybit_logo from "@/assets/image/autofybit_logo.png";

const WorkExperience = () => {
  return (
    <div className="relative overflow-hidden md:py-10">
      <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-slate-950">
        <div className="absolute bottom-auto right-auto left-80 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <div className="relative h-full w-full bg-white dark:bg-slate-950">
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      <div className="max-w-7xl mx-auto p-2 relative">
        <div className="text-center">
          <h1 className="text-slate-900 dark:text-white text-2xl lg:text-4xl dancing-script font-semibold mb-20">
            <span className="px-1 rounded-sm bg-linear-to-r from-[rgb(125,51,204)] to-[rgb(230,153,58)]">
              Work
            </span>{" "}
            Experience
          </h1>
        </div>
        <div className="max-w-5xl mx-auto space-y-1">
          <div className="collapse collapse-plus bg-slate-900 border border-base-300">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title font-semibold grid grid-cols-2 md:grid-cols-4 gap-5">
              <h1>Jul 2024 - Dec 2024</h1>
              <Image
                src="https://penough.com/assets/logo-BVWhp8oD.png"
                width={100}
                height={50}
                alt="penough academy"
              />
              <h1>Security Software Developer</h1>
              <div></div>
            </div>
            <div className="collapse-content text-sm">
              I worked as a Security Software Developer at Penough Academy,
              where I built and customized the official website. I also
              developed a Student Certificate Verification system, allowing
              student data to be securely stored in a database and verified
              through the UI using a student ID. This experience helped me gain
              valuable real-life skills that are now benefiting my professional
              career. I am grateful to Penough Academy for the learning
              opportunity.
            </div>
          </div>
          <div className="collapse collapse-plus bg-slate-900 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold grid grid-cols-2 md:grid-cols-4 gap-5">
              <h1>Jan 2024 - Apr 2024</h1>
              <Image
                src={autofybit_logo}
                width={100}
                height={50}
                alt="autofyBit"
              />
              <h1>Web Developer</h1>
              <div></div>
            </div>
            <div className="collapse-content text-sm">
              I worked as a Web Developer Intern at Autofy, where I learned web
              design fundamentals and contributed to real projects. My
              responsibilities included creating reusable components that senior
              developers used as building blocks for full websites. This
              internship marked the beginning of my web development journey and
              inspired me to pursue further courses in web design, gradually
              shaping my career in this field.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
