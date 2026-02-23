"use client";

import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";
import html from "@/assets/image/html.png";
import css from "@/assets/image/css.png";
import tailwindcss from "@/assets/image/tailwindcss.png";
import javascript from "@/assets/image/javascript.png";
import typescript from "@/assets/image/typescript.png";
import react from "@/assets/image/react.png";
import nextjs from "@/assets/image/nextjs.png";
import nodejs from "@/assets/image/nodejs.png";
import expressjs from "@/assets/image/expressjs.png";
import firebase from "@/assets/image/firebase.png";
import mongodb from "@/assets/image/mongodb.png";
import postgresql from "@/assets/image/postgresql.png";
import prisma from "@/assets/image/prisma.png";
import redux from "@/assets/image/redux.png";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black dark:bg-slate-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="cal-sans-regular text-2xl font-medium mb-4 text-gray-600 dark:text-gray-300">
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="100"
                  width="100"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <h1 className="text-gray-600 dark:text-gray-300">
                {item.description}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Learn and Explore HTML",
    description: (
      <>
        <p>
          {
            "HTML (HyperText Markup Language) is the standard markup language used to create the structure of web pages. It works as the skeleton of a website. Every HTML document starts with <!DOCTYPE> which tells the browser that it is an HTML5 document. The entire content is placed inside the <html> tag, which contains two main sections: <head> and <body>. The <head> section contains metadata such as <title>, meta charset, meta description, and viewport. These are important for SEO (Search Engine Optimization), proper character display, and responsive design. The <body> section contains all the visible content of the webpage."
          }
        </p>
        <p>
          {
            "HTML uses heading tags (h1 to h6) to create content hierarchy. Paragraphs are written using the <p> tag. For text formatting, tags like <strong> (important text), <em> (emphasized text), <b> (bold), <i> (italic), and <mark> (highlighted text) are used. Hyperlinks are created using the <a> (anchor) tag, which allows internal and external linking. Images are displayed using the <img> tag, and the alt attribute is important for accessibility and SEO. Lists are created using <ul> (unordered list), <ol> (ordered list), and <li> (list item). Data can be displayed in table format using <table>, <tr> (table row), <th> (header cell), and <td> (data cell)."
          }
        </p>
        <p>
          {
            "Forms are used to collect user input through the <form> tag. Inside forms, different <input> types are available such as text, email, password, number, date, radio, and checkbox. <textarea> is used for large text input, and <select> is used for dropdown menus. Validation attributes like required, min, and max help control user input. HTML5 introduced semantic elements like <header>, <nav>, <section>, <article>, <aside>, and <footer>, which make the structure more meaningful and SEO-friendly. For multimedia, HTML provides <audio> and <video> tags. The <iframe> tag allows embedding other webpages. Global attributes such as id, class, style, and title help identify and style elements."
          }
        </p>
      </>
    ),
    badge: "HTML",
    image: html,
  },
  {
    title: "Learn and Explore CSS",
    description: (
      <>
        <p>
          {
            "CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and layout of HTML elements on a web page. While HTML provides the structure, CSS defines how elements look, including colors, fonts, spacing, alignment, and positioning. CSS can be applied inline, internally within <style> tags, or externally via .css files, allowing for better separation of content and design."
          }
        </p>
        <p>
          {
            "With CSS, developers can create responsive designs that adapt to different screen sizes using media queries. It supports layout techniques such as Flexbox and Grid for precise alignment and distribution of elements. CSS also allows animations, transitions, shadows, gradients, and hover effects to enhance user experience. Classes and IDs help target specific elements, and cascading rules determine which styles are applied when multiple rules exist. Mastering CSS is essential for building visually appealing, user-friendly, and responsive websites."
          }
        </p>
      </>
    ),
    badge: "CSS",
    image: css,
  },
  {
    title: "Learn and Explore TailwindCSS",
    description: (
      <>
        <p>{""}</p>
      </>
    ),
    badge: "TailwindCSS",
    image: tailwindcss,
  },
  {
    title: "Learn and Explore JavaScript",
    description: (
      <>
        <p>{""}</p>
      </>
    ),
    badge: "JavaScript",
    image: javascript,
  },
  {
    title: "Learn and Explore TypeScript",
    description: (
      <>
        <p>{""}</p>
      </>
    ),
    badge: "TypeScript",
    image: typescript,
  },
  {
    title: "Learn and Explore React",
    description: (
      <>
        <p>{""}</p>
      </>
    ),
    badge: "React",
    image: react,
  },
  {
    title: "Learn and Explore Next.js",
    description: (
      <>
        <p>{""}</p>
      </>
    ),
    badge: "Next.js",
    image: nextjs,
  },
  {
    title: "Learn and Explore Node.js",
    description: (
      <>
        <p>{""}</p>
      </>
    ),
    badge: "Node.js",
    image: nodejs,
  },
  {
    title: "Learn and Explore Express.js",
    description: (
      <>
        <p>{""}</p>
      </>
    ),
    badge: "Express.js",
    image: expressjs,
  },
  {
    title: "Learn and Explore Firebase",
    description: (
      <>
        <p>{""}</p>
      </>
    ),
    badge: "Firebase",
    image: firebase,
  },
  {
    title: "Learn and Explore MongoDB",
    description: (
      <>
        <p>{""}</p>
      </>
    ),
    badge: "MongoDB",
    image: mongodb,
  },
  {
    title: "Learn and Explore PostgreSQL",
    description: (
      <>
        <p>{""}</p>
      </>
    ),
    badge: "PostgreSQL",
    image: postgresql,
  },
  {
    title: "Learn and Explore Prisma",
    description: (
      <>
        <p>{""}</p>
      </>
    ),
    badge: "Prisma",
    image: prisma,
  },
  {
    title: "Learn and Explore Redux",
    description: (
      <>
        <p>{""}</p>
      </>
    ),
    badge: "Redux",
    image: redux,
  },
];
