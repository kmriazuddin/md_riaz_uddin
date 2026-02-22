import Link from "next/link";
import SingleProjectSlide from "../components/singleProjectSlide";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { Project, Technology } from "../components/types";

type ProjectPageProps = {
  params: {
    id: string;
  };
};

const page = async ({ params }: ProjectPageProps) => {
  // Load JSON file from public
  const res = await fetch("https://md-riaz-uddin.vercel.app/projects.json", {
    cache: "no-store",
  });
  const data = await res.json();
  const ProjectData = await params;

  const project = data.find((p: Project) => p.id === Number(ProjectData.id));

  if (!project) {
    return <h1 className="text-center text-2xl p-10">Project Not Found!</h1>;
  }

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        <div className="absolute top-0 -z-10 h-full w-full">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        </div>
        <div className="relative h-full w-full">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[40%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[60%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="">
          <SingleProjectSlide images={project.images || []} />
        </div>
        <div className="flex gap-5">
          {/* GitHub */}
          {project.github?.map((pro: string, idx: number) => (
            <Link
              href={pro}
              key={idx}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative inline-flex h-8 active:scale-95 transition overflow-hidden rounded-lg p-px">
                <span
                  className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
            bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                ></span>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                  GitHub
                  <FaGithub />
                </span>
              </button>
            </Link>
          ))}
          {/* Live Website */}
          <Link
            href={project?.liveSite}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative inline-flex h-8 active:scale-95 transition overflow-hidden rounded-lg p-px">
              <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
            bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
              ></span>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                Website
                <BsArrowUpRightSquareFill />
              </span>
            </button>
          </Link>
        </div>
        {/* Title */}
        <h1 className="text-xl md:text-3xl font-bold text-slate-950 dark:text-white underline decoration-wavy decoration-gray-600 underline-offset-4">
          {project.title}
        </h1>
        {/* Description */}
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-lg leading-relaxed text-justify">
          {project.description}
        </p>
        {/* Features */}
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
          <h2 className="font-semibold text-xl mb-2 text-slate-950 dark:text-white">
            Features
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{project.features}</p>
        </div>
        {/* Technology */}
        <div className="mt-4 space-y-2">
          {project.technology?.map((tech: Technology, index: number) => (
            <ul
              key={index}
              className="text-sm text-slate-400 flex flex-wrap gap-2"
            >
              <li className="p-2 text-xs rounded-md bg-slate-800 text-white">
                <span className="font-semibold">Language:</span> {tech.language}
              </li>
              <li className="p-2 text-xs rounded-md bg-slate-800 text-white">
                <span className="font-semibold">Framework:</span>{" "}
                {tech.framework}
              </li>
              <li className="p-2 text-xs rounded-md bg-slate-800 text-white">
                <span className="font-semibold">UI:</span> {tech.ui}
              </li>
              <li className="p-2 text-xs rounded-md bg-slate-800 text-white">
                <span className="font-semibold">Backend:</span> {tech.backend}
              </li>
              <li className="p-2 text-xs rounded-md bg-slate-800 text-white">
                <span className="font-semibold">Database:</span> {tech.database}
              </li>
              <li className="p-2 text-xs rounded-md bg-slate-800 text-white">
                <span className="font-semibold">ORM:</span> {tech.orm}
              </li>
              <li className="p-2 text-xs rounded-md bg-slate-800 text-white">
                <span className="font-semibold">Validation:</span>{" "}
                {tech.validation}
              </li>
              <li className="p-2 text-xs rounded-md bg-slate-800 text-white">
                <span className="font-semibold">Uploader:</span>{" "}
                {tech.fileUploader}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
