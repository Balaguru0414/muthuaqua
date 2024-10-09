import React from "react";
// import HeroImage from "../assets/hero image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      className="flex bg-cover bg-center bg-opacity-10 gap-10
    bg-[url(https://img.freepik.com/free-photo/water-filters-glasses-water-ice_23-2148728703.jpg?t=st=1728046596~exp=1728050196~hmac=3188d406cb05dd3549dfe8ff089f072c341dc031c7f7404eebfcb13741a8e272&w=740)] 
    flex-col md:flex-row items-center justify-center min-h-screen md:px-20 px-4 py-10"
    >
      <div className="w-full md:w-1/2 flex flex-col items-start text-left ">
        <h1 className="text-4xl font-bold mb-4">
          The Best RO Purifier Service
        </h1>
        <p className="text-lg mb-6">
          Ensure you and your family have access to clean and safe drinking
          water with our top-notch RO purifier services. Discover the difference
          today!
        </p>
        <button
          onClick={scrollToContact}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Contact Us
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          //   src={HeroImage}
          src="https://img.freepik.com/premium-photo/woman-with-water-purifier-standing-with-one-arm-ra-1_975681-129850.jpg?w=740"
          alt="RO Purifier"
          className="object-cover shadow-lg rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
