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
        {/* Title */}
        <h1 className="text-3xl font-bold text-slate-950 dark:text-white underline decoration-wavy decoration-gray-600 underline-offset-4">
          {project.title}
        </h1>

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
    </div>
  );
};

export default page;
