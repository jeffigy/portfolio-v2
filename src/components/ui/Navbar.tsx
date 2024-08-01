import Logo from "@/assets/initials.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-20 flex w-full bg-base-300">
      <div className="mx-5 flex h-14 w-full max-w-screen-xl items-center justify-between xl:mx-auto">
        {" "}
        <img src={Logo} className="h-10 text-primary" />
        <div className="flex space-x-2">
          <button className="btn !rounded-none border-b-4 border-l-0 border-r-0 border-t-0 border-primary !bg-transparent text-primary">
            Home
          </button>
          <button className="btn !border-none !bg-transparent">About</button>
          <button className="btn !border-none !bg-transparent">Skills</button>
          <button className="btn !border-none !bg-transparent">Projects</button>
          <button className="btn !border-none !bg-transparent">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
