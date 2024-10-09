import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
      <Testimonial />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
