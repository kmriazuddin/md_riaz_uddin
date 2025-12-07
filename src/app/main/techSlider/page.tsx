"Use client";

import Marquee from "react-fast-marquee";
import TechCard from "./CardDetails";
import { techSliderImage } from "../../../../public/imageUrl";

const TechSlider = () => {
  return (
    <div className="py-10 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        {/* <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div> */}
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-slate-900 dark:text-white text-2xl lg:text-4xl dancing-script font-semibold mb-20">
            Most Used <span className="p-1 rounded-sm bg-linear-to-r from-[rgb(125,51,204)] to-[rgb(230,153,58)]">Technology</span>
          </h1>
        </div>
        <Marquee
          speed={30}
          gradient={false}
          pauseOnHover={true}
          style={{ willChange: "transform" }}
        >
          {techSliderImage.map((item, i) => (
            <div key={i} className="mx-3 md:mx-8">
              <TechCard {...item} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TechSlider;
