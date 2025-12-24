import Image from "next/image";
import SingleProjectSlide from "../components/singleProjectSlide";

type ProjectPageProps = {
  params: {
    id: string;
  };
};

type Project = {
  id: number;
  thumbnails: string;
  images?: string;
  title: string;
  description: string;
  features: string;
  technology: Technology;
};

type Technology = {
  language: string;
  framework: string;
  ui: string;
  backend: string;
  database: string;
  orm: string;
  validation: string;
  fileUploader: string;
};

const page = async ({ params }: ProjectPageProps) => {
  // Load JSON file from public
  const res = await fetch("http://localhost:3000/projects.json", {
    cache: "no-store",
  });
  const data = await res.json();
  const ProjectData = await params;

  const project = data.find((p: Project) => p.id === Number(ProjectData.id));

  if (!project) {
    return <h1 className="text-center text-2xl p-10">Project Not Found</h1>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="">
        <SingleProjectSlide images={project.images || []} />
      </div>
      {/* Title */}
      <h1 className="text-3xl font-bold">{project.title}</h1>

      {/* Description */}
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        {project.description}
      </p>

      {/* Features */}
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
        <h2 className="font-semibold text-xl mb-2">Features</h2>
        <p className="text-gray-600 dark:text-gray-300">{project.features}</p>
      </div>
    </div>
  );
};

export default page;
