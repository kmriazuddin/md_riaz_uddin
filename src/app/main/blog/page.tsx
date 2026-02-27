import BlogDetails from "./components/BlogDetails";

const Blog = async () => {
  const res = await fetch("http://localhost:3000/data/blogs.json");
  const data = await res.json();

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        </div>
        <div>
          <BlogDetails data={data} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
