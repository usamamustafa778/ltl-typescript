import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="py-4 lg:p-7 flex flex-col items-center w-full bg-white sticky top-0 z-50">
      <div className="w-10/12 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-3xl font-bold text-primary">
            LTL.
          </Link>
          <div className="hidden lg:flex ml-20">
            <Link to="/" className="mr-10 hover:text-primary font-medium">
              Home
            </Link>
            <Link to="/" className="mr-10 hover:text-primary font-medium">
              Pricing
            </Link>
            <Link to="/" className="mr-10 hover:text-primary font-medium">
              Features
            </Link>
            <Link to="/" className="mr-10 hover:text-primary font-medium">
              Community
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex">
          <Link
            to="/"
            className="py-3 px-8 mr-6 border text-primary font-medium border-primary rounded-md"
          >
            Login
          </Link>
          <Link
            to="/"
            className="py-3 px-8 border text-white bg-primary font-medium border-primary rounded-md"
          >
            Start Free Trial
          </Link>
        </div>
        <button
          onClick={showMenu}
          className="block text-primary text-lg font-bold lg:hidden focus:outline-none"
        >
          {active ? "CLOSE" : "MENU"}
        </button>
      </div>

      <div
        id="menu"
        className={
          active
            ? "relative lg:hidden p-1 mt-6 text-xl w-10/12  text-black rounded-lg flex-auto h-screen"
            : "hidden"
        }
      >
        <div className="flex flex-col justify-center text-start mt-6">
          <Link onClick={showMenu} className="border-b py-4" to="/">
            Home
          </Link>
          <Link onClick={showMenu} className="border-b py-4" to="/">
            Pricing
          </Link>
          <Link onClick={showMenu} className="border-b py-4" to="/">
            Features
          </Link>
          <Link onClick={showMenu} className="border-b py-4" to="/">
            Community
          </Link>
          <div className="flex flex-col text-center mt-16">
            <Link
              to="/"
              className="py-3 px-8 border text-primary font-medium border-primary rounded-md"
            >
              Login
            </Link>
            <Link
              to="/"
              className="py-3 px-8 mt-5 border text-white bg-primary font-medium border-primary rounded-md"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
