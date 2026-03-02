"use client";

import { Blogs } from "@/app/blogs/type";
import BlogDetailsCard from "./BlogDetailsCard";

const BlogDetails = ({ data }: { data: Blogs[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
      {data.map((data, index) => (
        <BlogDetailsCard key={index} project={data} />
      ))}
    </div>
  );
};

export default BlogDetails;
