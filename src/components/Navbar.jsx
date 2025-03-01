import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navList = [
    { name: "Home", path: "/home" },
    { name: "Recent Projects", path: "/recent-projects" },
    { name: "Past Projects", path: "/past-projects" },
    { name: "Certification & Education", path: "/certification-education" },
    { name: "Contact", path: "/contact" },
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
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
