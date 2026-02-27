import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import ContactDetails from "./contactDetails";

const Contact = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
        </div>
        <div className="p-10 text-center">
          <h1 className="text-slate-900 dark:text-white text-2xl lg:text-4xl dancing-script font-semibold mb-5">
            Hiring the Right{" "}
            <span className="p-1 rounded-sm bg-linear-to-r from-[rgb(125,51,204)] to-[rgb(230,153,58)]">
              Web Developers
            </span>{" "}
            to Drive Digital Business Success
          </h1>
          <p className="text-italianno text-slate-900 dark:text-white text-lg md:text-xl lg:text-3xl">
            Recruiting Skilled Web Developers for Scalable Digital Solutions
          </p>
          <Link
            href="https://drive.google.com/file/d/1tajRWyvxLOI8vs0hAvaJvWaUg75RO451/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block mt-5"
          >
            <button className="relative inline-flex h-8 active:scale-95 transition overflow-hidden rounded-lg p-px">
              <span
                className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] 
                    bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"
              ></span>
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-2 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
                Resume
                <FaExternalLinkAlt />
              </span>
            </button>
          </Link>
        </div>
        {/* Contact Details */}
        <ContactDetails />
      </div>
    </div>
  );
};

export default Contact;
