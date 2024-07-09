"use client";

import Image from "next/image";
import ProfileImage from "@/images/me.jpeg";
import { FadeIn, FadeInStagger } from "@/components/FadeIn";
import {
  RiCalendarFill,
  RiFileDownloadFill,
  RiMailSendFill,
  RiMapPinFill,
} from "react-icons/ri";
import { motion } from "framer-motion";
import DateTime from "@/components/DateTime";
import clsx from "clsx";

function RoleSummary({
  title,
  dateFrom,
  dateTo,
  location,
  className,
}: {
  title: string;
  dateFrom: Date;
  dateTo: Date;
  location: string;
  className?: string;
}) {
  return (
    <FadeIn
      className={clsx(
        "sticky flex flex-col gap-4 py-2 text-gray-200",
        className,
      )}
    >
      <h3 className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-2xl font-bold text-transparent lg:text-4xl">
        {title}
      </h3>
      <div className="flex items-center gap-3">
        <RiCalendarFill />
        <span className="text-xl">
          <DateTime date={dateFrom} /> - <DateTime date={dateTo} />
        </span>
      </div>
      <div className="flex items-center gap-3">
        <RiMapPinFill />
        <span className="text-xl">{location}</span>
      </div>
    </FadeIn>
  );
}

function Profile() {
  const skills: string[] = [
    "PHP",
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "PHPUnit",
    "Pest",
    "JS (ES5 & ES6)",
    "Vue.js",
    "Typescript",
    "Livewire",
    "Inertia",
    "CSS 3",
    "Tailwind CSS",
    "Docker",
    "Git",
    "Jira",
  ];
  return (
    <FadeIn>
      <section className="container mx-auto mt-4 flex max-w-7xl flex-col items-center justify-center gap-16 px-2 pt-2 lg:flex-row lg:gap-32 lg:p-0">
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-5xl font-bold text-white">
            Hello, I&apos;m{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Tom Green
            </span>
          </h1>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex select-none items-center rounded-lg bg-slate-700 py-1.5 pe-4 ps-4 text-sm text-white"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="mailto:me@tomgreen.dev"
              className="flex w-auto items-center gap-2 rounded-md bg-white px-4 py-2 text-gray-900 transition ease-linear hover:bg-white/80"
            >
              Get in touch
              <RiMailSendFill />
            </motion.a>
            <motion.a
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              href="/thomas_green_cv.pdf"
              rel="noopener"
              target="_blank"
              className="flex w-auto items-center gap-2 rounded-md bg-white px-4 py-2 text-gray-900 transition ease-linear hover:bg-white/80"
            >
              Download CV
              <RiFileDownloadFill />
            </motion.a>
          </div>
        </div>
        <Image
          src={ProfileImage}
          width={400}
          loading="eager"
          alt="Tom Green"
          className="rounded-3xl"
        />
      </section>
    </FadeIn>
  );
}

function AboutMe() {
  return (
    <FadeIn className="mt-24">
      <section className="container prose prose-xl prose-slate prose-invert mx-auto max-w-7xl px-2  lg:columns-2 lg:p-0">
        <p className="font-bold">
          Accomplished Senior Software Engineer with over 6 years of robust
          experience in PHP development, with a keen specialisation in Laravel
          and Vue.js. Experienced in developing RESTful APIs, ensuring high
          performance and reliability for complex web applications.
        </p>
        <p>
          Proven track record of leading cross-functional development teams,
          mentoring junior developers, and fostering a collaborative work
          environment. Driven and organised, with a passion for continuous
          learning and improvement. Confident in my ability to deliver
          high-quality software solutions under tight deadlines. Excellent
          communicator, capable of translating complex technical concepts into
          clear, actionable insights for non-technical stakeholders.
        </p>
        <p>
          Strong proponent of Agile methodologies and Test-Driven Development
          (TDD), ensuring iterative development and robust, testable code. A
          dedicated team worker who thrives in collaborative environments, I am
          committed to achieving both personal and organisational goals.
        </p>
      </section>
    </FadeIn>
  );
}

function WorkHistory() {
  const visualsoft = [
    "Extensive experience in PHP (Laravel) and Vue.js across various projects.",
    "Designed and implemented multiple microservice-based RESTful APIs for an e-commerce platform.",
    "Implemented Test-Driven Development (TDD) methodologies, improving code quality and facilitating automation.",
    "Supported and maintained Docker environments, ensuring high reliability and performance of services in production.",
    "Provided guidance and mentorship to junior developers through code reviews and pair programming sessions.",
    "Advocated for and implemented Agile working processes, contributing to sprint planning, stand-ups, and retrospectives to enhance team collaboration.",
    "Deputised as Technical Lead for 2 months, overseeing technical decisions and team management.",
    "Communicated effectively with cross-functional teams, including design, product management, and client services, to ensure project alignment and timely delivery.",
    "Delivered projects under tight deadlines, demonstrating strong time management and organizational skills.",
    "Utilised Semaphore and other CI/CD pipeline tools to streamline deployment processes.",
  ];

  const vetuk = [
    "Implemented an improved search engine based on Elasticsearch, adding search suggest functionality and reducing search load time.",
    "Built an in-house holiday management system to replace the legacy paper system.",
    "Developed automatic checking on licensed products, reducing the need for manual checks by staff.",
    "Collaborated with non-technical team members to gather requirements and provide technical insights, ensuring alignment with business goals.",
    "Managed multiple projects simultaneously, delivering high-quality solutions within deadlines.",
  ];

  return (
    <FadeIn className="bg-black/30 p-8 lg:p-12 w-full mt-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-4">
        <h2 className="text-center text-4xl font-bold text-white lg:text-6xl">
          Professional Experience
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <RoleSummary
            title="Senior Software Engineer, Visualsoft"
            location="Newcastle"
            dateFrom={new Date(2019, 2, 1)}
            dateTo={new Date()}
          />

          <FadeInStagger
            faster
            className="prose prose-slate prose-xl prose-invert col-span-2 "
          >
            <ul className="list-none p-0">
              {visualsoft.map((item, index) => (
                <li key={index}>
                  <FadeIn>{item}</FadeIn>
                </li>
              ))}
            </ul>
          </FadeInStagger>

          <RoleSummary
            title="Web Developer, VetUK"
            location="Newcastle"
            dateFrom={new Date(2017, 10, 1)}
            dateTo={new Date(2019, 1, 1)}
          />

          <FadeInStagger
            faster
            className="prose prose-slate prose-xl prose-invert col-span-2 "
          >
            <ul className="list-none  p-0">
              {vetuk.map((item, index) => (
                <li key={index} className="first:mt-0">
                  <FadeIn>{item}</FadeIn>
                </li>
              ))}
            </ul>
          </FadeInStagger>
        </div>
      </div>
    </FadeIn>
  );
}

function Education() {
  const university = [
    "Relevant Modules: Programming, Relational Databases, Web Technologies, Systems Analysis, Computing Fundamentals, Artificial Intelligence, and Machine Learning.",
    "Developed competence in Java, C, PHP, JavaScript, SQL, HTML, and CSS.",
    "Gained extensive front-end and back-end website development knowledge.",
    "Developed strong teamwork, project management, and on-time delivery skills.",
  ];

  return (
    <FadeIn className="p-8 lg:p-12 w-full">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 ">
        <h2 className="text-center text-4xl font-bold text-white lg:text-6xl">
          Education
        </h2>

        <div className="grid gap-6 lg:grid-cols-3  ">
          <RoleSummary
            title="Computer Science, BSc"
            location="Northumbria University, Newcastle"
            dateFrom={new Date(2014, 10, 1)}
            dateTo={new Date(2017, 7, 1)}
            className="lg:order-2"
          />

          <FadeInStagger
            faster
            className="prose prose-slate prose-xl prose-invert col-span-2 lg:order-1"
          >
            <ul className="list-none  p-0">
              {university.map((item, index) => (
                <li key={index} className="first:mt-0">
                  <FadeIn>{item}</FadeIn>
                </li>
              ))}
            </ul>
          </FadeInStagger>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Profile />
      <AboutMe />
      <WorkHistory />
      <Education />
    </div>
  );
}
