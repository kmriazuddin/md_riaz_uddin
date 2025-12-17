import BlogsDetails from "./blogsDetails";

const Blogs = async () => {
  const res = await fetch("http://localhost:3000/data/blogs.json");
  const data = await res.json();

  return (
    <div className="relative overflow-hidden py-10 md:py-20 px-6 z-10">
      <div className="absolute inset-0 -z-10 bg-white dark:bg-slate-950">
        {/* Left radial gradient */}
        <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

        {/* Right radial gradient */}
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="text-center text-slate-900 dark:text-white text-2xl lg:text-4xl dancing-script font-semibold">
            <span className="px-1 rounded-sm bg-linear-to-r from-[rgb(125,51,204)] to-[rgb(230,153,58)]">
              Coding
            </span>{" "}
            Thoughts
          </h1>
        </div>
        <BlogsDetails data={data} />
      </div>
    </div>
  );
};

export default Blogs;
