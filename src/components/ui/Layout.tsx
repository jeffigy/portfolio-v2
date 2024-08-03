import Navbar from "./nav/Navbar";

import AnimatedGrid from "../backgrounds/AnimatedGrid";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      {" "}
      <Navbar />
      <AnimatedGrid />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
export default Layout;
