import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants/index.js";
import { logo, menu, close } from "../assets/assets.js";
import { styles } from "../../utils/styles.js";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
          <p className="text-indigo-600 text-[18px] font-bold cursor-pointer flex gap-2">
            {"FitMe | Health"}
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-indigo-900" : "text-indigo-500"
              } cursor-pointer text-[18px] font-bold hover:text-indigo-700`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt={toggle ? "close" : "menu"}
            className="w-[28px] h-[28px] objecct-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 indigo-gradient absolute top-20 right-0 mx-2 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="flex list-none justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  className={`${
                    active === link.title
                      ? "text-indigo-900"
                      : "text-indigo-500"
                  } cursor-pointer text-[16px] font-bold hover:text-indigo-700 font-poppins font-medium`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
