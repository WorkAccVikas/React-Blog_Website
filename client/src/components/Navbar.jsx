import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaDribbble, FaTwitter, FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import { useState } from "react";

function Navbar() {
  console.log("Navbar render");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const navItems = [
    {
      path: "/",
      link: "Home",
    },
    {
      path: "/services",
      link: "Services",
    },
    {
      path: "/about",
      link: "About",
    },
    {
      path: "/blogs",
      link: "Blogs",
    },
    {
      path: "/contact",
      link: "Contact",
    },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 bg-black text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-bold">
          Design<span className="uppercase text-orange-500">Vkc</span>
        </Link>

        {/* NavItems for large devices */}
        <ul className="hidden gap-12 text-lg md:flex">
          {navItems.map(({ path, link }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : "not-active"
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* lg (>=1024px) : Menu Icons */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href="/" className="hover:text-orange-500">
            <FaFacebook />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaDribbble />
          </a>
          <a href="/" className="hover:text-orange-500">
            <FaTwitter />
          </a>
          <button className="rounded bg-orange-500 px-6 py-2 font-medium transition-all duration-200 ease-in hover:bg-white hover:text-orange-500">
            Log In
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <button className="cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaXmark className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Menu Items only for mobile */}
      <div>
        <ul
          className={`block gap-12 space-y-4 bg-white px-4 py-6 text-lg md:hidden ${isMenuOpen ? "left-0 top-0 w-full transition-all duration-150 ease-out" : "hidden"}`}
        >
          {navItems.map(({ path, link }) => (
            <li key={path} className="text-center text-black ">
              <NavLink
                to={path}
                onClick={toggleMenu}
                className={({ isActive, isPending }) =>
                  isActive ? "active" : isPending ? "pending" : "not-active"
                }
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
