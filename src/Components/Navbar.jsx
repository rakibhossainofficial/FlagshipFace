import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdBookmarkAdd } from "react-icons/md";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <div className=" shadow-sm">
        <div className="flex  justify-between navbar bg-base-100 max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className=" cursor-pointer mr-3 lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-indigo-600" : ""
                    }
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-indigo-600" : ""
                    }
                    to="/About"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-indigo-600" : ""
                    }
                    to="/Cart"
                  >
                    <FaShoppingCart />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-indigo-600" : ""
                    }
                    to="/Favourite"
                  >
                    <MdBookmarkAdd />
                  </NavLink>
                </li>
              </ul>
            </div>

            <Link className="font-bold text-2xl">FlagshipFaceOff</Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-indigo-600" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-indigo-600" : ""
                  }
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-indigo-600" : ""
                  }
                  to="/Cart"
                >
                  <FaShoppingCart />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-indigo-600" : ""
                  }
                  to="/Favourite"
                >
                  <MdBookmarkAdd />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
