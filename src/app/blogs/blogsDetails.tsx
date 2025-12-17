"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./blogsCard";
import { Blogs } from "./type";

const BlogsDetails = ({ data }: { data: Blogs[] }) => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* arrows */}
        <div className="flex justify-end gap-3 mb-10">
          <button
            onClick={handlePrev}
            className="h-10 w-10 border border-[rgb(230,153,58)] rounded flex items-center justify-center transition cursor-pointer"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={handleNext}
            className="h-10 w-10 border border-[rgb(230,153,58)] bg-linear-to-tr from-[rgb(125,51,204)] to-[rgb(230,153,58)] rounded flex items-center justify-center transition cursor-pointer"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Slider */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* MOBILE → 1 CARD */}
          <div className="block md:hidden">
            <Card project={data[index]} />
          </div>

          {/* DESKTOP → 3 CARDS */}
          <div className="hidden md:contents">
            {[0, 1, 2].map((offset) => {
              const project = data[(index + offset) % data.length];
              return <Card key={project.id} project={project} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsDetails;
