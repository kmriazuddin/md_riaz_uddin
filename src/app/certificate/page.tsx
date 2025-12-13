"use client";

import { useEffect, useState } from "react";
import CertificateDetails from "./certificateDetails";

type Certificate = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  link: string;
};

const Certificate = () => {
  const [data, setData] = useState<Certificate[]>([]);

  useEffect(() => {
    fetch("/data/certificate.json") // note: public/data/certificate.json -> /data/certificate.json
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (data.length === 0) return <p>Loading...</p>;

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 -z-10 h-full w-full bg-white dark:bg-slate-950">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <div className="relative">
        <CertificateDetails data={data} autoplay />
      </div>
    </div>
  );
};

export default Certificate;
