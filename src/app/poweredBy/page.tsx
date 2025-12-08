import Image from "next/image";
// import poweredBy from "";

const PoweredBy = () => {
  return (
    <div className="relative w-full overflow-hidden z-0">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 -z-10 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-size-[20px_20px]"></div> */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
        <div className="absolute left-0 right-0 top-40 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      {/* Content */}
      <div className="relative text-center">
        <h1 className="text-slate-900 dark:text-white text-2xl lg:text-4xl dancing-script font-semibold mb-10">Powered By</h1>
        <Image
          src="/slider_logo/poweredby.gif"
          width={500}
          height={500}
          alt="Powered By"
          className="mx-auto"
          unoptimized
        />
      </div>
    </div>
  );
};

export default PoweredBy;
