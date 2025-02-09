import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode'

const menuItems = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Top Rated", link: "/#" },
  { id: 3, name: "Kids Wear", link: "/#" },
  { id: 4, name: "Women Wear", link: "/#" },
  { id: 5, name: "Men Wear", link: "/#" },
];

const dropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  const handleOrderClick = () => {
    alert("Ordering is not available yet");
  };

  return (
    <nav className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div>
            <a
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-1 items-center"
            >
              <img src={Logo} alt="Shopsy logo" className="w-10" />
              Shopsy
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 group-hover:text-primary" />
            </div>
          </div>

          {/* Order Button */}
          <button
            onClick={handleOrderClick}
            className="bg-gradient-to-t from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
          >
            <span className="hidden group-hover:block transition-all duration-200">
              Order
            </span>
            <FaCartShopping className="text-xl drop-shadow-sm cursor-pointer" />
          </button>

          {/* Dark Mode Switch */}
          <div>
            <DarkMode />
          </div>
        </div>
      </div>

      {/* Lower Navbar */}
      <div className="flex justify-center">
        <ul className="hidden sm:flex items-center gap-4">
          {menuItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="px-4 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Dropdown Menu */}
          <li className="relative group cursor-pointer">
            <a href="#" className="flex items-center gap-1 py-2">
              Trending Products
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </a>

            <div
              className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md 
              bg-white p-2 text-black shadow-md dark:bg-gray-800 dark:text-white"
            >
              <ul>
                {dropdownLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.link}
                      className="block w-full rounded-md p-2 hover:bg-primary/20"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;