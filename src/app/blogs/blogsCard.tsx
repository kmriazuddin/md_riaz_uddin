import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Blogs } from "./type";
import { MdArrowOutward } from "react-icons/md";

const Card = ({ project }: { project: Blogs }) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-gray-500 dark:bg-slate-900 p-4 rounded-xl hover:scale-[1.02] transition"
    >
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={500}
        className="rounded-lg object-cover w-full h-[350px]"
      />

      <div className="p-5 space-y-3">
        <h2 className="text-xl font-semibold text-white">{project.title}</h2>

        <p className="text-sm text-slate-300">
          {project.description.length > 90
            ? project.description.slice(0, 90) + "..."
            : project.description}
        </p>

        <Link
          href={project.documentation}
          target="_blank"
          className="inline-flex items-start gap-2 text-purple-400 hover:underline"
        >
          Documentation
          <MdArrowOutward />
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
