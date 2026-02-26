"use client";

import Link from "next/link";
import { ReactNode } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  value: string;
  href?: string;
};

const ContactDetails = () => {
  return (
    <section className="text-white mt-10">
      <div>
        <div className="text-center mb-16">
          <p className="text-fuchsia-400 tracking-widest text-sm mb-2">
            — GET IN TOUCH —
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-950 dark:text-white">
            Let’s <span className="text-fuchsia-400">Build</span> Together
          </h2>
          <p className="text-slate-400 mt-4">
            Open to full-time roles, freelance projects, and exciting
            collaborations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div className="space-y-8">
            <InfoCard
              icon={<FaEnvelope />}
              title="EMAIL"
              value="mohammadriazuddin3@gmail.com"
            />
            <InfoCard
              icon={<FaPhoneAlt />}
              title="PHONE"
              value="+88 01867224861"
            />
            <InfoCard
              icon={<FaLinkedinIn />}
              title="LINKEDIN"
              value="https://www.linkedin.com/in/kmriazuddin"
              href="https://www.linkedin.com/in/kmriazuddin"
            />
            <InfoCard
              icon={<FaGithub />}
              title="GITHUB"
              value="https://github.com/kmriazuddin"
              href="https://github.com/kmriazuddin"
            />
            <InfoCard
              icon={<FaMapMarkerAlt />}
              title="LOCATION"
              value="Mirpur, Dhaka, Bangladesh"
            />
          </div>

          <div
            className="relative rounded-xl p-px bg-linear-to-br from-fuchsia-400/40 via-transparent to-transparent backdrop-blur"
            style={{
              clipPath: `polygon( 0 0, 95% 0, 100% 8%, 100% 100%, 5% 100%, 0 92% )`,
            }}
          >
            <div className="rounded-xl bg-[#F4E7FB] dark:bg-linear-to-br from-[#0b1220] to-[#071a35] p-8">
              <h3 className="text-xl font-semibold mb-6 text-slate-950">
                Send a Message
              </h3>{" "}
              <form className="space-y-5 text-slate-950 dark:text-slate-400">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input placeholder="Your name" label="NAME" />
                  <Input placeholder="your@gmail.com" label="EMAIL" />
                </div>{" "}
                <Input placeholder="What's this about?" label="SUBJECT" />{" "}
                <div>
                  <label className="text-xs tracking-widest">MESSAGE</label>
                  <textarea
                    className="mt-2 w-full min-h-[140px] bg-transparent border border-fuchsia-400/30 px-4 py-3 outline-none focus:border-fuchsia-400 transition"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="relative w-full overflow-hidden bg-linear-to-r from-fuchsia-400 to-fuchsia-500 py-3 font-semibold text-black transition hover:brightness-110 hover:cursor-pointer"
                  style={{
                    clipPath: `polygon(0 0, 95% 0, 100% 40%, 100% 100%, 0 100% )`,
                  }}
                >
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs dark:text-slate-400 tracking-widest">
        {label}
      </label>
      <input
        className="mt-2 w-full rounded-md bg-transparent border border-fuchsia-400/30 px-4 py-3 outline-none focus:border-fuchsia-400"
        placeholder={placeholder}
      />
    </div>
  );
}

const InfoCard = ({ icon, title, value, href }: InfoCardProps) => {
  const CardContent = (
    <div
      className="dark:bg-[#0b1220] bg-[#f5f5f4] px-6 py-5 flex items-center justify-between"
      style={{
        clipPath: "polygon(0 0, 95% 0, 100% 20%, 100% 100%, 5% 100%, 0 80%)",
      }}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 flex items-center justify-center border border-slate-950 dark:border-[#00ff99]/30 rounded-md text-slate-950 dark:text-[#00ff99]">
          {icon}
        </div>
        <div>
          <p className="text-slate-950 dark:text-white text-xs tracking-widest">
            {title}
          </p>
          <p className="text-slate-950 dark:text-white font-semibold">
            {value}
          </p>
        </div>
      </div>
      <span className="text-slate-950 dark:text-[#00ff99]">→</span>
    </div>
  );

  return (
    <div
      className="dark:bg-linear-to-r from-[#00ff99]/40 via-[#00ffcc]/40 to-[#00ffaa]/40 p-px"
      style={{
        clipPath: "polygon(0 0, 95% 0, 100% 20%, 100% 100%, 5% 100%, 0 80%)",
      }}
    >
      {href ? (
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer"
        >
          {CardContent}
        </Link>
      ) : (
        CardContent
      )}
    </div>
  );
};
