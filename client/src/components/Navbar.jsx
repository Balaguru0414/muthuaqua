import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = [
    // { name: "Home", url: "home" },
    { name: "About", url: "about" },
    { name: "Service", url: "service" },
    { name: "Contact Us", url: "contact" },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(section);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="bg-white bg-opacity-30 backdrop-blur-lg md:px-20 px-4 py-4 flex 
    justify-between shadow-lg sticky top-0 z-10 items-centers w-full  transition-all duration-300"
    >
      <div className="text-2xl font-bold">Muthu Aqua</div>

      <button
        className="block md:hidden p-2 focus:outline-none"
        onClick={toggleMobileMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Desktop Links */}
      <div className="hidden text-gray-800 md:flex md:items-center md:justify-between md:space-x-4">
        {links.map((link, i) => (
          <a
            key={i}
            onClick={() => scrollToSection(link.url)}
            className="block px-2 py-1 font-medium rounded-sm hover:text-white hover:bg-gray-600"
            // href={link.url}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Mobile Links */}
      {isMobileMenuOpen && (
        <div className="flex flex-col md:hidden text-blue-500 bg-white  w-full absolute top-20 left-0 z-20">
          <a
            className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
            href="#home"
            onClick={toggleMobileMenu}
          >
            Home
          </a>
          <a
            className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
            href="#about"
            onClick={toggleMobileMenu}
          >
            About
          </a>
          <a
            className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
            href="#service"
            onClick={toggleMobileMenu}
          >
            Service
          </a>
          <a
            className="block px-4 py-2 hover:bg-blue-600 hover:text-white"
            href="#contact"
            onClick={toggleMobileMenu}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
