import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      {" "}
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
