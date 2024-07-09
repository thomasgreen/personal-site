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
import { GridPattern } from "@/components/GridPattern";
import { Container } from "@/components/Container";

function Skills() {
  const skills: string[] = [
    "PHP",
    "Laravel",
    "MySQL",
    "PHPUnit",
    "Pest",
    "JS (ES6)",
    "Vue.js",
    "React",
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
    <div className="mt-24 w-full bg-black/30 py-20 text-white sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider sm:text-left">
            Some of my skills
          </h2>
          <div className="h-px flex-auto bg-slate-50/50" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="divide mt-10 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-5"
          >
            {skills.map((skill) => (
              <li key={skill}>
                <FadeIn>
                  <span className="font-bold">{skill}</span>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
}

function Highlighted({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function CtaButtons() {
  return (
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
  );
}

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
  return (
    <>
      <GridPattern
        className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-950/10 stroke-neutral-50/10 [mask-image:linear-gradient(to_bottom_left,white_5%,transparent_50%)]"
        yOffset={-96}
        interactive
      />
      <FadeIn className="w-full max-w-7xl">
        <section className="mx-auto flex w-full flex-col justify-center gap-8 px-2 pt-2 lg:p-0">
          <Image
            src={ProfileImage}
            width={100}
            height={100}
            alt="Tom Green"
            className="rounded-full"
            priority
            placeholder="blur"
          />

          <h1 className="max-w-2xl text-5xl font-bold leading-relaxed text-white">
            Hello, I&apos;m <Highlighted>Tom Green</Highlighted>, a{" "}
            <Highlighted>Software Engineer</Highlighted> based in{" "}
            <Highlighted>Newcastle</Highlighted>
          </h1>
          <p className="prose prose-xl prose-slate prose-invert max-w-2xl">
            A Senior Software Engineer specialising in PHP, Laravel, and Vue.js.
            With over six years of experience, I can lead dynamic development
            teams and craft high-performance web applications, and reliable,
            test-driven code. Based in Newcastle-upon-Tyne, I am passionate
            about continuous learning and delivering top-notch software
            solutions.
          </p>
          <CtaButtons />
        </section>
      </FadeIn>
    </>
  );
}

function AboutMe() {
  return (
    <FadeIn className="mt-24" id="about-me">
      <section className="container prose prose-xl prose-slate prose-invert mx-auto max-w-7xl px-2 lg:columns-2 lg:p-0">
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
    <FadeIn
      className="mt-24 w-full bg-black/30 p-8 lg:p-12"
      id="professional-experience"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <h2 className="text-center font-display text-4xl font-bold text-white lg:text-6xl">
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
            className="prose prose-xl prose-slate prose-invert col-span-2"
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
            className="prose prose-xl prose-slate prose-invert col-span-2"
          >
            <ul className="list-none p-0">
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
    <FadeIn className="w-full p-8 lg:p-12" id="education">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <h2 className="text-center font-display text-4xl font-bold text-white lg:text-6xl">
          Education
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <RoleSummary
            title="Computer Science, BSc"
            location="Northumbria University, Newcastle"
            dateFrom={new Date(2014, 10, 1)}
            dateTo={new Date(2017, 7, 1)}
            className="lg:order-2"
          />

          <FadeInStagger
            faster
            className="prose prose-xl prose-slate prose-invert col-span-2 lg:order-1"
          >
            <ul className="list-none p-0">
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
      <Skills />
      <AboutMe />
      <WorkHistory />
      <Education />
    </div>
  );
}
