import { NavLink } from "react-router-dom";
import { Icon } from '@iconify/react';

const Navbar = () => {
  const navList = [
    { name: "Home", path: "/home", icon: <Icon icon="line-md:home" width="50" height="50"  style={{color: "#0a66c2"}} />},
    { name: "Recent Projects", path: "/recent-projects", icon: <Icon icon="line-md:clipboard-list" width="50" height="50" /> },
    { name: "Past Projects", path: "/past-projects", icon: <Icon icon="line-md:folder-arrow-left" width="50" height="50" /> },
    { name: "Certification & Education", path: "/certification-education", icon: <Icon icon="line-md:text-box-multiple" width="50" height="50" /> },
    { name: "Contact", path: "/contact", icon: <Icon icon="line-md:account" width="50" height="50" /> },
  ];
  return (
    <>
      <nav className="w-full bg-gray-800 py-4 ">
        <div className="w-full flex justify-evenly items-center space-x-6">
          {navList.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `flex flex-col items-center text-white ${
                  isActive ? "active" : ""
                }`
              }
            >
              {link.name}
              {link.icon}
              
            </NavLink>
          ))}
        </div>
      
      </nav>
    </>
  );
};

export default Navbar;
