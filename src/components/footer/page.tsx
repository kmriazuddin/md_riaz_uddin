import Link from "next/link";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative bg-white dark:bg-slate-950">
      {/* background blob */}
      <div className="absolute -z-10 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-0 -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative flex justify-center items-center">
        <footer className="footer sm:footer-horizontal items-center p-4">
          <aside className="text-slate-700 dark:text-white">
            <p>
              Copyright © {new Date().getFullYear()} Md Riaz Uddin — All rights
              reserved.
            </p>
          </aside>

          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <Link
              href="https://github.com/kmriazuddin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative inline-flex h-8 active:scale-95 transition overflow-hidden rounded-lg p-px focus:outline-none">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                  <FaGithub />
                </span>
              </button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/km-riaz-uddin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative inline-flex h-8 active:scale-95 transition overflow-hidden rounded-lg p-px focus:outline-none">
                <span
                  className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
            bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                ></span>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                  <FaLinkedin />
                </span>
              </button>
            </Link>

            <Link
              href="https://www.facebook.com/kmriazuddin99?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="relative inline-flex h-8 active:scale-95 transition overflow-hidden rounded-lg p-px">
                <span
                  className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
            bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
                ></span>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                  <FaFacebookSquare />
                </span>
              </button>
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
