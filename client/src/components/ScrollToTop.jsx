import React, { useEffect, useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      // Show button after scrolling 300px
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to the top
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {visible && (
        <div
          onClick={scrollToTop}
          className="cursor-pointer h-10 w-10 fixed bottom-5 right-5 flex justify-center items-center
    bg-blue-500 hover:bg-blue-600 transition rounded-full shadow-lg z-50
    "
        >
          <button className="text-white" aria-label="Scroll to top">
            <FaLongArrowAltUp />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
