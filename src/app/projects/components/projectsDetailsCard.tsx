"use client";

import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "./types";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

const ProjectsDetailsCard = ({ data }: ProjectCardProps) => {
  const projectData = data.slice(0, 3);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projectData.map((project, i) => (
        <div
          key={i}
          className="card bg-slate-700 dark:bg-slate-900 w-96 rounded-[10px] shadow-[1px_1px_5px_#aaaaaa,-1px_-1px_5px_#ffffff] hover:scale-[1.02] dark:shadow-none transition p-3 mx-auto"
        >
          {/* Image click → Project page */}
          <Link href={`/projects/${project.id}`}>
            <figure className="w-full h-60 overflow-hidden p-5 cursor-pointer">
              <Image
                src={project.thumbnails}
                alt="Project"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl"
              />
            </figure>
          </Link>

          <div className="card-body pt-0">
            {/* Github Link */}
            <Link
              href={project.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-end items-center gap-2 text-blue-600 dark:text-blue-400"
            >
              Website <BsArrowUpRightSquareFill />
            </Link>

            <Link href={`/projects/${project.id}`}>
              <h2 className="card-title text-white cursor-pointer">
                {project.title}
              </h2>
            </Link>

            <p className="text-slate-400">
              {project.description.length > 90
                ? project.description.slice(0, 140) + "..."
                : project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsDetailsCard;
