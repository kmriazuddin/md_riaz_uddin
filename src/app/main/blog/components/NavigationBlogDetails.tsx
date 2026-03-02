"use client";

import { Blogs } from "@/app/blogs/type";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const NavigationBlogDetails = ({ data }: { data: Blogs[] }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
      {data.map((data) => (
        <motion.div
          key={data?.id}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="bg-slate-700 dark:bg-slate-900 p-4 rounded-[10px] shadow-[1px_1px_5px_#aaaaaa,-1px_-1px_5px_#ffffff] hover:scale-[1.02] dark:shadow-none transition"
        >
          <Image
            src={data?.thumbnails}
            alt={data?.title}
            width={400}
            height={500}
            className="rounded-lg object-cover w-full h-[350px]"
          />

          <div className="p-5 space-y-3">
            <h2 className="text-xl font-semibold text-white">{data.title}</h2>
            <p className="text-sm text-slate-400">
              {data.description.length > 90
                ? data.description.slice(0, 90) + "..."
                : data.description}
            </p>
            <Link
              href={`/main/blog/${data.id}`}
              target="_blank"
              className="inline-flex items-start gap-1 text-purple-400 hover:underline"
            >
              Documentation
              <MdArrowOutward />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default NavigationBlogDetails;
