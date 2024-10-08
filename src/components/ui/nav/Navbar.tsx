import Logo from "@/assets/initials.png";
import Drawer from "../Drawer";
import { Link } from "react-scroll";
import { Links } from "@/lib/data";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 z-20 flex w-full bg-base-300"
    >
      <div className="mx-5 flex h-14 w-full max-w-screen-xl items-center justify-between xl:mx-auto">
        <img src={Logo} className="h-10 w-auto text-primary" alt="Logo" />
        <div className="hidden space-x-2 md:flex">
          {Links &&
            Links.map((link, index) => (
              <Link
                href={link.hash}
                key={index}
                spy={true}
                smooth={true}
                duration={500}
                to={link.hash}
                className="btn !border-none !bg-transparent"
              >
                {link.name}
              </Link>
            ))}
        </div>
        <Drawer />
      </div>
    </motion.div>
  );
};

export default Navbar;
