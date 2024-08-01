import Avatar from "@/assets/avatar.webp";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, MessageCircleMore } from "lucide-react";
import Section from "../ui/Section";

const Hero = () => {
  return (
    <Section className="h-screen">
      <img src={Avatar} className="w-56 rounded-full" alt="hero avatar" />
      <h1 className="text-2xl font-bold text-primary md:text-3xl lg:text-5xl">
        Hi, I'm Jeffy
        <motion.span
          style={{
            marginBottom: "-50px",
            marginRight: "-20px",
            paddingBottom: "50px",
            paddingRight: "45px",
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
      </h1>

      <h2 className="w-full max-w-screen-md md:text-lg lg:text-xl">
        A web developer who loves turning ideas into reality through code. Dive
        into my portfolio to see how I blend creativity and technology to create
        awesome digital experiences. Let's build something amazing together!
      </h2>
      <div className="flex space-x-5">
        {" "}
        <button className="btn btn-primary">
          {" "}
          <MessageCircleMore />
          Get in touch
        </button>
        <button className="btn btn-ghost">
          {" "}
          <Download />
          Download DV
        </button>
        <button className="btn btn-ghost">
          {" "}
          <Github />
        </button>
        <button className="btn btn-ghost">
          {" "}
          <Linkedin />
        </button>
      </div>
    </Section>
  );
};

export default Hero;
