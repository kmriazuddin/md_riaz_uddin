import React from "react";
import { TracingBeamDemo } from "./TracingBeam";
import TechSlider from "@/app/techSlider/page";

const Skills = () => {
  return (
    <div className="bg-white dark:bg-slate-950 space-y-10 lg:space-y-32">
      <TracingBeamDemo />
      <TechSlider />
    </div>
  );
};

export default Skills;
