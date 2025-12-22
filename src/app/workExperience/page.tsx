import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
// import "./style.css";

const WorkExperience = () => {
  return (
    <div>
      <div className="bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="absolute h-full w-full">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[40px_34px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-90"></div>
        </div>
        <div className="max-w-7xl mx-auto p-2">
          <div className="text-center">
            <h1 className="text-slate-900 dark:text-white text-2xl lg:text-4xl dancing-script font-semibold mb-20">
              <span className="p-1 rounded-sm bg-linear-to-r from-[rgb(125,51,204)] to-[rgb(230,153,58)]">
                Work
              </span>{" "}
              Experience
            </h1>
          </div>
          <div className="max-w-5xl mx-auto">
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
              <div className="collapse-content text-sm">Description</div>
            </div>
            <div className="collapse collapse-plus bg-slate-900 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold grid grid-cols-2 md:grid-cols-4 gap-5">
                <h1>Jan 2024 - Apr 2024</h1>
                <Image
                  src="https://autofy.com.bd/includes/themes/custom/autofybit/img/seo/autofybit_logo_w.webp"
                  width={100}
                  height={50}
                  alt="autofyBit"
                />
                <h1>Web Developer</h1>
                <div></div>
              </div>
              <div className="collapse-content text-sm">Description</div>
            </div>
            {/* <div className="collapse collapse-plus bg-base-100 border border-base-300">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title font-semibold">
              How do I update my profile information?
            </div>
            <div className="collapse-content text-sm">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
