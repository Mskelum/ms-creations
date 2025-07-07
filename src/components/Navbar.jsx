import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/cover.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 max-w-7xl mx-auto flex items-center justify-between relative rounded-lg">


      <Link to="/">
        <img
          src={logo}
          alt="MS Creations Logo"
          className="h-10 w-auto"
        />
      </Link>


      {/* Desktop Links */}
      <ul className="hidden md:flex gap-10 text-gray-700 font-semibold tracking-wide">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About" },
          { to: "/contact", label: "Contact" },
          { to: "/feedback", label: "Feedback" },
        ].map(({ to, label }) => (
          <li key={label} className="relative group cursor-pointer">
            <Link
              to={to}
              className="hover:text-cyan-600 transition"
            >
              {label}
            </Link>
            {/* Animated underline */}
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-cyan-600 transition-all group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden text-gray-700 focus:outline-none z-30"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20"
            onClick={() => setMenuOpen(false)}
          />
          <ul
            className="fixed top-16 right-4 bg-white bg-opacity-90 backdrop-blur-md shadow-xl flex flex-col gap-4 p-5 rounded-lg w-48 z-30"
            onClick={() => setMenuOpen(false)}
          >
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
              { to: "/feedback", label: "Feedback" },
            ].map(({ to, label }) => (
              <li
                key={label}
                className="px-4 py-2 rounded-md hover:bg-cyan-100 transition cursor-pointer"
              >
                <Link
                  to={to}
                  className="block text-gray-800 font-semibold hover:text-cyan-700"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navbar;
