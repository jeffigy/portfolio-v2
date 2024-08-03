import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Links } from "@/lib/data";
import { Link } from "react-scroll";

const Drawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const VARIANTS = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "53%"],
        left: "50%",
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],
        left: "calc(50% + 10px)",
      },
    },
  };

  const listItemVariants = {
    hidden: { x: "20%" },
    visible: (i: number) => ({
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,

        delay: i * 0.1,
      },
    }),
  };

  return (
    <div className="block md:hidden">
      <MotionConfig
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <motion.button
          initial={false}
          animate={isOpen ? "open" : "closed"}
          onClick={toggleDrawer}
          className="relative z-10 h-14 w-14 rounded-full bg-white/0 transition-colors hover:bg-base-100"
        >
          <motion.span
            variants={VARIANTS.top}
            className="absolute h-1 w-8 rounded-full bg-primary"
            style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
          />
          <motion.span
            variants={VARIANTS.middle}
            className="absolute h-1 w-8 rounded-full bg-primary"
            style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
          />
          <motion.span
            variants={VARIANTS.bottom}
            className="absolute h-1 w-4 rounded-full bg-primary"
            style={{
              x: "-62%",
              y: "50%",
              bottom: "35%",
              left: "calc(50% + 10px)",
            }}
          />
        </motion.button>
      </MotionConfig>

      <motion.div
        initial={{ x: "200%" }}
        animate={{ x: isOpen ? 0 : "200%" }}
        transition={{ type: "just" }}
        className="z-5 fixed right-0 top-0 h-full w-full bg-base-100 shadow-lg"
      >
        <div className="p-4 text-white">
          <ul className="mt-10 space-y-6">
            {Links &&
              Links.map((link, index) => (
                <motion.li
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate={isOpen ? "visible" : "hidden"}
                  variants={listItemVariants}
                  className="text-5xl font-bold"
                >
                  <Link
                    href={link.hash}
                    className="cursor-pointer"
                    smooth={true}
                    to={link.hash}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Drawer;
