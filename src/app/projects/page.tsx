import { Suspense } from "react";
import ProjectsDetailsCard from "./components/projectsDetailsCard";

const Projects = async () => {
  const res = await fetch("http://localhost:3000/projects.json", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div>
      <div className="py-10">
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
