import { Github, Linkedin } from "lucide-react";
import Meteors from "../magicui/meteors";
import Section from "../ui/Section";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <Section id="contact" title="Contact" className="h-screen">
        <div className="bg-background card w-full max-w-xl overflow-hidden rounded-md bg-base-100">
          <Meteors number={30} />
          <div className="card-body">
            <div className="flex justify-center space-x-5">
              <button className="btn btn-ghost" aria-label="github">
                {" "}
                <Github className="h-10 w-10" />
              </button>
              <button className="btn btn-ghost" aria-label="linkedin">
                {" "}
                <Linkedin className="h-10 w-10" />
              </button>
            </div>
            <div className="flex w-full flex-col border-opacity-50">
              <div className="divider">OR</div>
            </div>
            <form
              className="card-body p-0"
              action={import.meta.env.VITE_FORM_URI}
              method="POST"
            >
              <input
                name="name"
                placeholder="Name"
                type="text"
                className="input input-lg input-bordered z-10"
                required
              />
              <input
                required
                name="email"
                placeholder="Email"
                type="email"
                className="input input-lg input-bordered z-10"
              />
              <textarea
                required
                name="message"
                placeholder="Message"
                className="textarea textarea-bordered textarea-lg z-10 h-40"
              />
              <button className="btn btn-primary w-full">
                {" "}
                <PaperAirplaneIcon type="submit" className="h-6" />
                Send
              </button>
            </form>
          </div>
        </div>
      </Section>
    </motion.section>
  );
};

export default Contact;
