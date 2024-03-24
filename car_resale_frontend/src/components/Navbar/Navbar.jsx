import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";

import { FaUserCircle } from "react-icons/fa";

export const Navlinks = [
  {
    id: 1,
    name: "HOME",
    link: "/home",
  },
  {
    id: 2,
    name: "SELLER",
    link: "/#seller",
  },
  {
    id: 3,
    name: "USED CARS",
    link: "/#carlist",
  },
  {
    id: 4,
    name: "CAR PRICE PREDICTION",
    link: "/prediction",
  },
];
const Navbar = ({ theme, setTheme,username }) => {
  const [showMenu, setShowMenu] = useState(false);
  console.log(username)
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  console.log(username);
  return (
    <>
    <div
      className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300
    " 
    >
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-3xl font-bold font-serif"> <a href={"/"}>CarSell</a></span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                  >
                    {name}
                  </a>
                </li>
              ))}
              {/* DarkMode feature implement */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
                  <div>
                    <FaUserCircle size={50} />
                    <h1>{username}</h1>
                  </div>
            </ul>
        
          </nav>
          
       
       
      </div>
    </div>
    </div>
    </>
  );
};

export default Navbar;
