import { React } from "react";
import Logo from "/public/datasapiencelogo-nobg.png";
const NavBar = () => {
  return (
    <nav className="navbar bg-black">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl">
        <img
          className="avatar mask mask-circle w-10 h-10 bg-white" // Adjust width and height as needed
          src={Logo.src}
          alt="Data Sapience Lab"
        />
        
          Data Sapience Lab
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Portfolio</a>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2">
                <li>
                  <a>Data analysis</a>
                </li>
                <li>
                  <a>Custom Website</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Consultancy</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="/"
          className="btn btn-secondary hover:btn-accent hover:shadow-accent hover:shadow-md hover:border-black"
        >
          Contact Us
        </a>
      </div>
    </nav>
  );
};
export default NavBar;
