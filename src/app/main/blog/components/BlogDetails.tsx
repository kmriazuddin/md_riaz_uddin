"use client";

import Card from "@/app/blogs/blogsCard";
import { Blogs } from "@/app/blogs/type";

const BlogDetails = ({ data }: { data: Blogs[] }) => {
  console.log("Data===>", data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
      {data.map((data, index) => (
        <Card key={index} project={data} />
      ))}
    </div>
  );
};

export default BlogDetails;
