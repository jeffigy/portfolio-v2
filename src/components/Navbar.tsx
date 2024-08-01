import Logo from "@/assets/initials.png";

const Navbar = () => {
  return (
    <div className="z-1 bg-base-300 fixed top-0 flex w-full">
      <div className="mx-5 flex h-14 w-full max-w-screen-xl items-center justify-between xl:mx-auto">
        {" "}
        <img src={Logo} className="text-primary h-10" />
        <div className="flex space-x-1">
          <button className="btn btn-sm btn-ghost">button</button>
          <button className="btn btn-sm !border-none !bg-transparent">
            button
          </button>
          <button className="btn btn-sm !border-none !bg-transparent">
            button
          </button>
          <button className="btn btn-sm !border-none !bg-transparent">
            button
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
