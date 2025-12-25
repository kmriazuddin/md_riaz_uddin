import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="relative overflow-hidden h-screen">
      <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-slate-950">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>
      {/* Your Content/Components */}
      <div className="max-w-7xl mx-auto">
        <Image
          src="/image/not-f.png"
          width={400}
          height={400}
          alt="not-found"
          className="flex justify-center items-center mx-auto"
        />
        <Link href="/">
          <button className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-md p-2 text-white flex justify-center mx-auto cursor-pointer">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
