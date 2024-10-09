import React from "react";
import Navbar from "./Navbar";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const Header = () => {
  return (
    <div className="sticky top-0 z-10">
      <header
        className="flex justify-between items-center md:px-20 px-4 bg-black 
      text-white py-1 transition-all duration-300"
      >
        <a href="tel:9876543210" className="flex items-center gap-1">
          <AiOutlinePhone className="text-xl" />
          <span>9876543210</span>
        </a>
        <a
          href="mailto:rodealer@example.com"
          className="flex items-center gap-1"
        >
          <AiOutlineMail className="text-xl" />
          <span>rodealer@gmail.com</span>
        </a>
      </header>
      <Navbar />
    </div>
  );
};

export default Header;
