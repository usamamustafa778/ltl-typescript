import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div className="flex flex-col items-center p-3 border-r fixed w-full bg-white lg:sticky top-0 z-50">
      <div className="flex lg:flex-col items-center justify-between w-full p-1 px-4 lg:p-0">
        <div className="text-center lg:mt-3">
          <h1 className="text-blue-900 text-3xl font-bold">LTL</h1>
          <p className="hidden lg:flex capitalize text-blue-900/60">
            learn the language
          </p>
        </div>
        <div className="hidden lg:flex flex-col w-full">
          <div className="flex flex-col w-full mt-20">
            <Link
              to="/dashboard"
              className="mt-3 flex items-center p-3 cursor-pointer text-gray-500 transition-all hover:text-blue-900 rounded w-full hover:bg-blue-400/20"
            >
              Overview
            </Link>
            <Link
              to="/dashboard"
              className="mt-3 flex items-center p-3 cursor-pointer text-gray-500 transition-all hover:text-blue-900 rounded w-full hover:bg-blue-400/20"
            >
              Courses
            </Link>
            <Link
              to="/dashboard"
              className="mt-3 flex items-center p-3 cursor-pointer text-gray-500 transition-all hover:text-blue-900 rounded w-full hover:bg-blue-400/20"
            >
              Pricing
            </Link>
            <Link
              to="/dashboard"
              className="mt-3 flex items-center p-3 cursor-pointer text-gray-500 transition-all hover:text-blue-900 rounded w-full hover:bg-blue-400/20"
            >
              Mobile App
            </Link>
            <Link
              to="/dashboard"
              className="mt-3 flex items-center p-3 cursor-pointer text-gray-500 transition-all hover:text-blue-900 rounded w-full hover:bg-blue-400/20"
            >
              Settings
            </Link>
            <Link
              to="/dashboard"
              className="mt-3 flex items-center p-3 cursor-pointer text-gray-500 transition-all hover:text-blue-900 rounded w-full hover:bg-blue-400/20"
            >
              Schedule
            </Link>
          </div>
        </div>
        <button
          onClick={showMenu}
          className="block text-primary text-lg font-bold lg:hidden focus:outline-none"
        >
          {active ? "CLOSE" : "MENU"}
        </button>
      </div>

      {/* Phone Bar */}
      <div
        id="menu"
        className={
          active
            ? "relative lg:hidden mt-6 text-xl w-11/12  text-black rounded-lg flex-auto h-screen"
            : "hidden"
        }
      >
        <div className="flex flex-col justify-center text-start mt-6">
          <Link onClick={showMenu} className="border-b py-4" to="/dashboard">
            Overview
          </Link>
          <Link onClick={showMenu} className="border-b py-4" to="/dashboard">
            Courses
          </Link>
          <Link onClick={showMenu} className="border-b py-4" to="/dashboard">
            Pricing
          </Link>
          <Link onClick={showMenu} className="border-b py-4" to="/dashboard">
            Mobile App
          </Link>
          <Link onClick={showMenu} className="border-b py-4" to="/dashboard">
            Settings
          </Link>
          <Link onClick={showMenu} className="border-b py-4" to="/dashboard">
            Schedule
          </Link>
          <div className="flex flex-col text-center mt-16">
            <Link
              to="/dashboard"
              className="py-3 px-8 border text-primary font-medium border-primary rounded-md"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
