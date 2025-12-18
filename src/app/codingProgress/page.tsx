import { cn } from "@/lib/utils";

const CodingProgress = () => {
  return (
    <div>
      <div className="relative flex h-80 w-full justify-center bg-white dark:bg-slate-950">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-slate-950"></div>
        {/* <p className="relative z-20 bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-xl font-bold text-transparent sm:text-2xl">
          Live Code Time
        </p> */}
        <div className="relative z-20 bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 font-bold text-transparent">
          <h1 className="text-center text-slate-900 dark:text-white text-2xl lg:text-4xl dancing-script font-semibold">
            Live Coding{" "}
            <span className="px-1 rounded-sm bg-linear-to-r from-[rgb(125,51,204)] to-[rgb(230,153,58)]">
              Time
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CodingProgress;
