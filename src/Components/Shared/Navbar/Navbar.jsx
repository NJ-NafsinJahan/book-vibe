import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            ` font-semibold mr-4 ${
              isActive
                ? "text-[#23BE0A] border-[1.8px] border-[#23BE0A] font-semibold text-[18px]"
                : {}
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/Books"}
          className={({ isActive }) =>
            ` font-semibold mr-4 ${
              isActive
                ? "text-[#23BE0A] border-[1.8px] border-[#23BE0A] font-semibold text-[18px]"
                : {}
            }`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/page-to-read"}
          className={({ isActive }) =>
            ` font-semibold mr-4 ${
              isActive
                ? "text-[#23BE0A] border-[1.8px] border-[#23BE0A] font-semibold text-[18px]"
                : {}
            }`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100 m-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <h2 className="text-[28px] font-bold text-[#131313]">Book Vibe</h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-1.5">
          <a className="btn  bg-[#23BE0A] text-amber-50 text-[18px] font-medium rounded-lg ">
            Sign In
          </a>
          <a className="btn bg-[#59C6D2] text-amber-50 text-[18px] font-medium rounded-lg">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
