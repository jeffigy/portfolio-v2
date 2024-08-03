import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
type ProjectProps = {
  project: {
    title: string;
    description: string;
    tags: string[] | readonly string[];
    imageUrl: string;
  };
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
      <section className="relative max-w-[42rem] overflow-hidden rounded-lg bg-base-100 transition sm:pr-8 sm:group-even:pl-8">
        <div className="flex h-full flex-col space-y-5 px-5 pb-7 pt-4 sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10 sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{project.title}</h3>

          <p className="leading-relaxed">{project.description}</p>

          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <li
                className="rounded-full bg-base-300 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>

          <button className="btn btn-primary">Live Site</button>
        </div>

        <img
          src={project.imageUrl}
          alt="Project I worked on"
          className="absolute -right-40 top-10 hidden w-[28.25rem] rounded-lg shadow-2xl transition group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 sm:block"
        />
      </section>
    </motion.div>
  );
};

export default Project;
