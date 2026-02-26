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
      <div className="max-w-2xl mx-auto antialiased pt-4">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black dark:bg-slate-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

            <p className="cal-sans-regular text-2xl font-medium mb-4 text-gray-600 dark:text-gray-300">
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="Programming Language Logo"
                  height={100}
                  width={133}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <span className="text-gray-600 dark:text-gray-300 text-justify">
                {item.description}
              </span>
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
            "HTML (HyperText Markup Language) creates the structure of web pages. It defines headings, paragraphs, links, images, lists, tables, and forms. Semantic elements like <header>, <section>, <article>, and <footer> organize content, improve SEO, and accessibility. Forms collect user input with <input>, <textarea>, <select>, and validation attributes. Multimedia elements like <audio> and <video> are supported. Global attributes such as id, class, and style help styling and identification. HTML is the backbone of web development."
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
            "CSS (Cascading Style Sheets) styles HTML elements. It controls colors, fonts, spacing, layout, alignment, and responsiveness. Developers can use inline, internal, or external CSS. CSS supports Flexbox, Grid, animations, transitions, and media queries for responsive design. Classes and IDs allow precise element targeting. Cascading rules determine which styles apply. CSS enhances the appearance, usability, and accessibility of websites, making them visually appealing and professional."
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
        <p>
          {
            "Tailwind CSS is a utility-first CSS framework. Developers apply predefined classes in HTML to style elements without writing custom CSS. It handles spacing, colors, fonts, flexbox, grid, borders, shadows, and responsiveness. Mobile-first breakpoints (sm, md, lg) enable responsive designs. Configuration files allow custom themes, colors, and spacing. Unlike other frameworks, Tailwind provides low-level utility classes instead of prebuilt components, making designs flexible, consistent, and faster to develop, especially for modern frameworks like React and Next.js."
          }
        </p>
      </>
    ),
    badge: "TailwindCSS",
    image: tailwindcss,
  },
  {
    title: "Learn and Explore JavaScript",
    description: (
      <>
        <p>
          {
            "JavaScript is a high-level programming language that makes web pages interactive. It handles events, DOM manipulation, and dynamic content. JavaScript supports variables, functions, loops, arrays, objects, and conditional logic. Modern JavaScript includes ES6 features like arrow functions, modules, and destructuring. Asynchronous programming with promises and async/await allows API calls and data fetching. It runs in browsers and on servers via Node.js. Mastering JavaScript enables developers to build dynamic and responsive websites and applications."
          }
        </p>
      </>
    ),
    badge: "JavaScript",
    image: javascript,
  },
  {
    title: "Learn and Explore TypeScript",
    description: (
      <>
        <p>
          {
            "TypeScript is a superset of JavaScript adding static typing. It improves code reliability and readability by catching errors at compile time. TypeScript supports interfaces, enums, generics, and type aliases. Variables, functions, and objects can have explicit types, making large applications maintainable. It compiles into plain JavaScript and works in browsers and Node.js. TypeScript is widely used in modern frameworks like React, Next.js, and Angular, providing scalability, type safety, and cleaner, more predictable code for professional development."
          }
        </p>
      </>
    ),
    badge: "TypeScript",
    image: typescript,
  },
  {
    title: "Learn and Explore React",
    description: (
      <>
        <p>
          {
            "React is a JavaScript library for building user interfaces, especially single-page applications. It uses a component-based architecture, where reusable components manage their own logic and UI. React employs a Virtual DOM to efficiently update only necessary parts of the page. State and props allow dynamic content, and hooks simplify state management and side effects. React’s declarative approach makes UI predictable and easier to maintain. Often paired with tools like Next.js, it is used for scalable, interactive, and high-performance web applications."
          }
        </p>
      </>
    ),
    badge: "React",
    image: react,
  },
  {
    title: "Learn and Explore Next.js",
    description: (
      <>
        <p>
          {
            "Next.js is a React framework for building fast, SEO-friendly, and scalable web applications. It supports server-side rendering (SSR), static site generation (SSG), and API routes. Pages are created via a file-based routing system. Next.js optimizes performance with code splitting, image optimization, and prefetching. It enables hybrid rendering, allowing both static and dynamic content. Full-stack development is possible using API routes. Next.js is widely used for e-commerce sites, dashboards, and production-ready applications requiring high performance and excellent developer experience."
          }
        </p>
      </>
    ),
    badge: "Next.js",
    image: nextjs,
  },
  {
    title: "Learn and Explore Node.js",
    description: (
      <>
        <p>
          {
            "Node.js is a JavaScript runtime for executing code outside the browser. It uses an event-driven, non-blocking architecture for high performance. Node.js enables building backend applications, APIs, real-time apps, and full-stack solutions using JavaScript. It integrates with npm (Node Package Manager) to use reusable packages. Node.js supports server-side logic, database interactions, and file handling. Its single-language ecosystem for frontend and backend simplifies development, making it ideal for scalable, high-performance web applications."
          }
        </p>
      </>
    ),
    badge: "Node.js",
    image: nodejs,
  },
  {
    title: "Learn and Explore Express.js",
    description: (
      <>
        <p>
          {
            "Express.js is a lightweight Node.js framework for building web servers and APIs. It simplifies routing, request handling, and response management. Middleware functions handle logging, authentication, and error processing. Express supports RESTful API creation and integrates easily with databases like MongoDB and PostgreSQL. Its minimalistic design allows flexibility and rapid backend development. Express.js is widely used in full-stack applications alongside frontend frameworks like React and Next.js, enabling scalable, maintainable, and high-performance server-side solutions."
          }
        </p>
      </>
    ),
    badge: "Express.js",
    image: expressjs,
  },
  {
    title: "Learn and Explore Firebase",
    description: (
      <>
        <p>
          {
            "Firebase is a cloud-based backend platform by Google. It provides real-time databases, authentication, hosting, cloud functions, and analytics. Firebase Authentication supports email, social logins, and secure access. Cloud Firestore and Realtime Database sync data instantly. Hosting allows fast deployment of web apps. Additional tools include performance monitoring, push notifications, and crash reporting. Firebase is ideal for startups, real-time apps, and full-stack development with React or Next.js, offering a serverless backend solution that is scalable, secure, and easy to integrate."
          }
        </p>
      </>
    ),
    badge: "Firebase",
    image: firebase,
  },
  {
    title: "Learn and Explore MongoDB",
    description: (
      <>
        <p>
          {
            "MongoDB is a NoSQL, document-based database that stores data in JSON-like BSON documents. It is schema-less, allowing flexible and dynamic data storage. MongoDB supports indexing, replication, and sharding for performance and scalability. It is ideal for large datasets, real-time applications, and dynamic web apps. Often used in the MERN stack (MongoDB, Express, React, Node.js), it integrates easily with backend frameworks, providing flexibility, fast querying, and developer-friendly database management for modern applications."
          }
        </p>
      </>
    ),
    badge: "MongoDB",
    image: mongodb,
  },
  {
    title: "Learn and Explore PostgreSQL",
    description: (
      <>
        <p>
          {
            "PostgreSQL is an open-source, relational database management system (RDBMS) known for reliability and performance. It stores data in structured tables with rows and columns and supports SQL queries. PostgreSQL offers advanced features like transactions, foreign keys, joins, triggers, indexing, and JSON support. It is scalable, secure, and suitable for enterprise-level applications, analytics platforms, and full-stack projects. PostgreSQL integrates with backend frameworks like Node.js and Django and is trusted for data integrity, complex queries, and large-scale application development."
          }
        </p>
      </>
    ),
    badge: "PostgreSQL",
    image: postgresql,
  },
  {
    title: "Learn and Explore Prisma",
    description: (
      <>
        <p>
          {
            "Prisma is a modern ORM for Node.js and TypeScript that simplifies database access with type-safe queries. It supports databases like PostgreSQL, MySQL, MongoDB, and SQLite. Prisma has three main tools: Prisma Client for type-safe queries, Prisma Migrate for schema versioning, and Prisma Studio for visual database management. It allows declarative schema definition and automatic query generation. Prisma improves productivity, reduces errors, and integrates easily with Node.js frameworks like Express, NestJS, and Next.js, making backend development faster and more reliable."
          }
        </p>
      </>
    ),
    badge: "Prisma",
    image: prisma,
  },
  {
    title: "Learn and Explore Redux",
    description: (
      <>
        <p>
          {
            "Redux is a state management library for JavaScript applications. It centralizes application state in a single store, making data flow predictable. State changes occur through actions (describing what happened) and reducers (pure functions updating state). Middleware handles asynchronous tasks, logging, and side effects. Redux separates state from UI components, improving maintainability, scalability, and testability. It is commonly used with React, Next.js, and other frameworks for managing complex frontend states efficiently."
          }
        </p>
      </>
    ),
    badge: "Redux",
    image: redux,
  },
];
