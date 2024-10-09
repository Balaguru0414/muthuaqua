const About = () => {
  return (
    <section
      id="about"
      className="bg-[#ccc] w-full min-h-screen flex py-20 px-4"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10 md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>

          <p className="mb-4">
            With over a decade of experience, we specialize in offering a wide
            range of cars, ensuring that you find the perfect vehicle that suits
            your needs and preferences. Our committed team is here to assist you
            every step of the way, from choosing the right car to financing
            options.
          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/premium-photo/shymkent-kazakhstan-january-30-2023-reverse-osmosis-system-water-purification-filtration-beer-production-plant_118086-15902.jpg?ga=GA1.1.1736865019.1727965084&semt=ais_hybrid"
            alt="About Us"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
