import React from "react";

const Service = () => {
  return (
    <section
      id="service"
      className="bg-[#eee] w-full min-h-screen flex py-20 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10 md:flex-row items-center">
        {/* Image on the left */}
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/free-photo/plumbing-professional-doing-his-job_23-2150721544.jpg?ga=GA1.1.1736865019.1727965084&semt=ais_hybrid"
            alt="Service"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text content on the right */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="mb-4">
            We offer a comprehensive range of automotive services to meet all
            your needs. Our experienced technicians are dedicated to providing
            quality service at competitive prices.
          </p>
          <p className="mb-4">
            From regular maintenance to complex repairs, we have you covered.
            Our commitment to customer satisfaction ensures that you will
            receive the best service every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
