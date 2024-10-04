import { ProjectType } from "@/types/Project";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github } from "lucide-react";
import React, { useRef } from "react";
type ProjectProps = {
  project: ProjectType;
};

const Project: React.FC<ProjectProps> = ({ project }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <section className="relative max-w-[42rem] overflow-hidden rounded-lg bg-base-200 transition sm:pr-8 sm:group-even:pl-8">
        {project.status === "pending" ? (
          <div className="flex h-[400px] flex-col items-center justify-center space-y-5 px-5 pb-7 pt-4 sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
            {" "}
            <p>Under constructions...</p>
          </div>
        ) : (
          <>
            <div className="flex h-full flex-col space-y-5 px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
              <h3 className="text-2xl font-semibold text-slate-100">
                {project.title}
              </h3>

              <p className="text-justify leading-relaxed text-slate-200">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <li
                    className="rounded-full bg-base-300 px-3 py-1 text-[0.7rem] uppercase tracking-wider"
                    key={index}
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="flex gap-5">
                {" "}
                <a
                  aria-label="github-link"
                  target="_blank"
                  href={project.githubLink}
                  className="btn btn-ghost grow"
                >
                  <Github />
                </a>
                <a
                  aria-label="demo-link"
                  target="_blank"
                  href={project.demoLink}
                  className="btn btn-primary grow"
                >
                  Demo
                </a>
              </div>
            </div>

            <img
              src={project.imageUrl}
              alt="Project I worked on"
              className="absolute -right-40 top-10 hidden w-[28.25rem] rounded-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
            />
          </>
        )}
      </section>
    </motion.div>
  );
};

export default Project;
