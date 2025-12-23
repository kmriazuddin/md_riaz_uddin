import { cn } from "@/lib/utils";
import CurrentDate from "./date";

const CodingProgress = () => {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="relative flex h-full w-full justify-center">
        <div
          className={cn(
            "absolute inset-0",
            "bg-size-[40px_40px]",
            "bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-slate-950 "></div>
        <div className="relative z-20 bg-linear-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 md:py-14 font-bold text-transparent">
          <h1 className="text-center text-slate-900 dark:text-white text-2xl lg:text-4xl dancing-script font-semibold">
            Live Coding{" "}
            <span className="px-1 rounded-sm bg-linear-to-r from-[rgb(125,51,204)] to-[rgb(230,153,58)]">
              Time
            </span>
          </h1>
          <div className="bg-slate-800 dark:bg-slate-900 rounded-2xl mt-10 w-80 md:w-full">
            <div className="stats stats-vertical lg:stats-horizontal">
              <div className="stat">
                <div className="stat-title">Active Code Time</div>
                <div className="stat-value text-white flex">
                  <h1>1110.58H</h1>
                  <span className="relative flex size-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                  </span>
                </div>
                <div className="stat-desc flex">
                  Aug 29, 2022 - <CurrentDate />
                </div>
              </div>

              <div className="stat">
                <div className="stat-title">Completed Project</div>
                <div className="stat-value text-white">08</div>
                <div className="stat-desc">↗︎ 08 (85%)</div>
              </div>

              <div className="stat">
                <div className="stat-title">Writing About Programming</div>
                <div className="stat-value text-white">10</div>
                <div className="stat-desc">↘︎ 10 (70%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingProgress;
