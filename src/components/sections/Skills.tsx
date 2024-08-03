import { SkillsData } from "@/lib/data";
import Section from "../ui/Section";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <Section id="skills" title="Skills" className="h-[700px]">
      <ul className="flex w-full max-w-md flex-wrap justify-center gap-2">
        {SkillsData &&
          SkillsData.map((tech, index) => (
            <Skill index={index} key={index} tech={tech} />
          ))}
      </ul>
    </Section>
  );
};

type SkillProps = {
  tech: String;
  index: number;
};

const Skill: React.FC<SkillProps> = ({ tech, index }) => {
  const fadeInAnimationsVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };
  return (
    <motion.li
      variants={fadeInAnimationsVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      whileHover={{ scale: 1.1 }}
      className="list-none rounded-full bg-base-100 px-4 py-2"
      custom={index}
    >
      {tech}
    </motion.li>
  );
};

export default Skills;
