"use client";

import Lottie from "lottie-react";
import programming from "@/assets/lottie/codding.json";
import travel from "@/assets/lottie/traveller.json";
import entertainment from "@/assets/lottie/social-media.json";
import sleep from "@/assets/lottie/sleep.json";

const Card = () => {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="uppercase text-2xl lg:text-4xl text-gray-900 dark:text-gray-200 ml-10 dancing-script">
            love to do
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 p-10">
          <div className="bg-gray-400 dark:bg-slate-900 h-40 rounded-lg flex flex-col justify-center items-center">
            <Lottie animationData={programming} className="w-20 h-20" />
            <h1 className="text-gray-800 dark:text-gray-400">Programming</h1>
          </div>
          <div className="bg-gray-400 dark:bg-slate-900 h-40 rounded-lg flex flex-col justify-center items-center">
            <Lottie animationData={travel} className="w-20 h-20" />
            <h1 className="text-gray-800 dark:text-gray-400">Travel</h1>
          </div>
          <div className="bg-gray-400 dark:bg-slate-900 h-40 rounded-lg flex flex-col justify-center items-center">
            <Lottie animationData={entertainment} className="w-20 h-20" />
            <h1 className="text-gray-800 dark:text-gray-400">Entertainment</h1>
          </div>
          <div className="bg-gray-400 dark:bg-slate-900 h-40 rounded-lg flex flex-col justify-center items-center">
            <Lottie animationData={sleep} className="w-20 h-20" />
            <h1 className="text-gray-800 dark:text-gray-400">Sleep</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
