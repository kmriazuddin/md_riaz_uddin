import Link from "next/link";
import { ModeToggle } from "../toggle-mode";
import { Button } from "../ui/button";
import { navLinks } from "./navLink";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-9999 bg-slate-100 dark:bg-slate-950 shadow-md">
      <div className="navbar max-w-7xl mx-auto text-slate-900 dark:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-slate-100 dark:bg-slate-950 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks.map((links) => (
                <li key={links.href}>
                  <Link href={links.href}>{links.name}</Link>
                </li>
              ))}
              <li>
                <Link
                  href="https://drive.google.com/file/d/1tajRWyvxLOI8vs0hAvaJvWaUg75RO451/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:inline-block"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/">
            <p
              className="text-xl md:text-3xl text-italianno tracking-wider"
              style={{ fontWeight: "bold" }}
            >
              Md Riaz Uddin
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {navLinks.map((links) => (
              <li key={links.href}>
                <Link href={links.href}>{links.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-10">
          <Link
            href="https://drive.google.com/file/d/1tajRWyvxLOI8vs0hAvaJvWaUg75RO451/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-block"
          >
            <Button>Resume</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
