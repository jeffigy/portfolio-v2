import Navbar from "./Navbar";
import GridPattern from "../sections/GridPattern";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen">
        {" "}
        <Navbar />
        <GridPattern />
        <div className="relative z-10">{children}</div>
      </div>
    </>
  );
};
export default Layout;
