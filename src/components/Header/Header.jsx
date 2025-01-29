import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <>
      <header className="sticky top-0 bg-white">
        <nav className="w-full  sm:px-8 px-4 sm:py-6 py-4 border-b-2 flex justify-between items-center ">
          <div>
            <img src={logo} alt="" className="w-20" />
          </div>
          <div className="md:block hidden">
            <ul className="list-none flex gap-16 text-lg">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `duration-200 transition ease-in-out font-bold ${
                      isActive ? "text-gray-500 underline" : "text-[#2B1B12]"
                    } hover:text-gray-700`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    `duration-200 transition ease-in-out font-bold ${
                      isActive ? "text-gray-500 underline" : "text-[#2B1B12]"
                    } hover:text-gray-700`
                  }
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/agents"
                  className={({ isActive }) =>
                    `duration-200 transition ease-in-out font-bold ${
                      isActive ? "text-gray-500 underline" : "text-[#2B1B12]"
                    } hover:text-gray-700`
                  }
                >
                  Agents
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `duration-200 transition ease-in-out font-bold ${
                      isActive ? "text-gray-500 underline" : "text-[#2B1B12]"
                    } hover:text-gray-700`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="md:block hidden ">
            <button className="bg-[#2b1b12] text-white font-bold hover:bg-opacity-90 px-5 py-2 rounded-lg">
              Sign Up
            </button>
          </div>
          <div className="dropdown dropdown-bottom dropdown-end md:hidden">
            <div tabIndex={0} role="button" className="btn m-1 bg-[#2b1b12]/95">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                class="inline-block h-5 w-5 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white rounded-lg z-[1] w-52 p-2 shadow-black border-2"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `duration-200 transition ease-in-out font-bold ${
                      isActive ? "text-gray-500 underline" : "text-[#2B1B12]"
                    } hover:text-gray-700`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    `duration-200 transition ease-in-out font-bold ${
                      isActive ? "text-gray-500 underline" : "text-[#2B1B12]"
                    } hover:text-gray-700`
                  }
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/agents"
                  className={({ isActive }) =>
                    `duration-200 transition ease-in-out font-bold ${
                      isActive ? "text-gray-500 underline" : "text-[#2B1B12]"
                    } hover:text-gray-700`
                  }
                >
                  Agents
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `duration-200 transition ease-in-out font-bold ${
                      isActive ? "text-gray-500 underline" : "text-[#2B1B12]"
                    } hover:text-gray-700`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
