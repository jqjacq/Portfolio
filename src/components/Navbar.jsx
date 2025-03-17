import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";
import TopPlane from "./Planes/TopPlane";
import LeftPlane from "./Planes/LeftPlane";

const Navbar = () => {
  const navList = [
    {
      name: "Home",
      path: "/home",
      icon: <Icon className="m-2 w-10 h-10 md:w-15 md:h-15" icon="line-md:home" width="50" height="50" />,
    },
    {
      name: "Skills",
      path: "/skills",
      icon: <Icon className="m-2 w-10 h-10 md:w-15 md:h-15" icon="line-md:lightbulb" width="50" height="50" />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <Icon className="m-2 w-10 h-10 md:w-15 md:h-15" icon="line-md:clipboard-list" width="50" height="50" />,
    },
    {
      name: "Education",
      path: "/certification-education",
      icon: <Icon className="m-2 w-10 h-10 md:w-15 md:h-15" icon="line-md:text-box-multiple" width="50" height="50" />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <Icon className="m-2 w-10 h-10 md:w-15 md:h-15" icon="line-md:account" width="50" height="50" />,
    },
  ];
  return (
    <>
      <TopPlane />
      <LeftPlane />
      <nav className=" w-full flex-1 flex justify-center items-center md:py-3 bg-purple-100 md:bg-transparent fixed bottom-0 left-0 md:static z-50">
        <div className="m-0 md:m-5 w-full flex justify-evenly items-center text-sm md:text-lg">
          {navList.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex flex-col w-full items-center text-white transition-transform duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1  ${
                  isActive
                    ? "bg-purple-200 !font-bold underline decoration md:p-3 md:rounded-lg md:bg-transparent md:shadow-lg"
                    : ""
                }`
              }
            >
              <span className="pt-3">{link.name}</span>
              {link.icon}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
