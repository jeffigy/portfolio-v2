import { motion } from "framer-motion";
import Section from "../ui/Section";

const About = () => {
  return (
    <Section id="about" title="About" className="">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="w-full max-w-screen-md space-y-5"
      >
        <p className="text-justify text-lg">
          Hello, I’m Jeffy Evangelista, a web developer with a thirst for
          learning and a profound fascination with technology. From a young age,
          I've been captivated by the inner workings of software that enable us
          to connect and innovate.
        </p>
        <p className="text-justify text-lg">
          Learning is a never-ending journey, and I embrace every opportunity to
          expand my knowledge and skills. In this ever-evolving landscape, I
          always stay up-to-date on the latest developments, whether it's new
          programming languages or other tools for software development.
        </p>
        <p className="text-justify text-lg">
          When I’m not engrossed in coding, you can often find me indulging in
          my favorite pastimes. I'm an avid anime enthusiast, a casual gamer,
          and I also prioritize regular exercise to maintain a healthy body and
          mind.
        </p>
      </motion.div>
    </Section>
  );
};

export default About;
