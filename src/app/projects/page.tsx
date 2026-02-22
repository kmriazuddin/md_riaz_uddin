import { Suspense } from "react";
import ProjectsDetailsCard from "./components/projectsDetailsCard";

const Projects = async () => {
  const res = await fetch("https://md-riaz-uddin.vercel.app/projects.json", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className="bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute h-full w-full">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>
      <div className="relative py-10">
        <div className="text-center">
          <h1 className="text-slate-900 dark:text-white text-2xl lg:text-4xl dancing-script font-semibold mb-20">
            See My{" "}
            <span className="p-1 rounded-sm bg-linear-to-r from-[rgb(125,51,204)] to-[rgb(230,153,58)]">
              Projects
            </span>
          </h1>
        </div>
        <div className="max-w-7xl mx-auto">
          <Suspense fallback={"Loading..."}>
            <ProjectsDetailsCard data={data} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Projects;
