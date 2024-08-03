import Avatar from "@/assets/avatar.webp";
import { motion } from "framer-motion";
import { Download, MessageCircleMore } from "lucide-react";
import Section from "../ui/Section";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <Section id="home" className="h-screen space-y-5">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: "0.2",
        }}
      >
        <img
          src={Avatar}
          className="h-44 w-44 rounded-full md:h-48 md:w-48 lg:h-52 lg:w-52"
          alt="hero avatar"
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-primary md:text-3xl lg:text-5xl"
      >
        Hi, I'm Jeffy
        <motion.span
          style={{
            marginBottom: "-50px",
            marginRight: "-20px",
            paddingBottom: "30px",
            paddingRight: "30px",
            display: "inline-block",
          }}
          animate={{ rotate: [0, 20, 0] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          👋
        </motion.span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-screen-sm justify-center md:text-lg lg:text-xl"
      >
        A web developer who loves turning ideas into reality through code. Dive
        into my portfolio to see how I blend creativity and technology to create
        awesome digital experiences. Let's build something amazing together!
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex space-x-5"
      >
        {" "}
        <Link
          href="contact"
          to="contact"
          smooth="true"
          className="btn btn-primary"
          aria-label="get-in-touch"
        >
          {" "}
          <MessageCircleMore />
          Get in touch
        </Link>
        <button className="btn btn-ghost" aria-label="download-cv">
          {" "}
          <Download />
          Download CV
        </button>
      </motion.div>
    </Section>
  );
};

export default Hero;
