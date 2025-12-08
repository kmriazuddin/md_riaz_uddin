"use client";

import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "./types";
import { FaGithub } from "react-icons/fa";

const ProjectsDetailsCard = ({ data }: ProjectCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((project, i) => (
        <div
          key={i}
          className="card bg-gray-400 dark:bg-slate-900 w-96 shadow-sm rounded-xl p-3"
        >
          {/* Image click → Project page */}
          <Link href={`/projects/${project.id}`}>
            <figure className="w-full h-60 overflow-hidden p-5 cursor-pointer">
              <Image
                src={project.image}
                alt="Project"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-xl"
              />
            </figure>
          </Link>

          <div className="card-body pt-0">
            {/* Github Link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-end items-center gap-2 text-blue-600 dark:text-blue-400"
            >
              Github <FaGithub />
            </a>

            <Link href={`/projects/${project.id}`}>
              <h2 className="card-title text-slate-900 dark:text-white cursor-pointer">
                {project.title}
              </h2>
            </Link>

            <p className="text-slate-900 dark:text-slate-400">
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
