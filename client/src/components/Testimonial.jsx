import React, { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// Sample testimonials with user images
const testimonials = [
  {
    id: 1,
    review: "Great service and friendly staff! Highly recommended.",
    customer: "John Doe",
    stars: 5,
    image:
      "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?ga=GA1.1.1736865019.1727965084&semt=ais_hybrid",
  },
  {
    id: 2,
    review: "I had an excellent experience. The team is very knowledgeable.",
    customer: "Jane Smith",
    stars: 4,
    image:
      "https://img.freepik.com/premium-photo/man-with-beard-mustache-is-wearing-shirt-that-says-it_1304175-85952.jpg?ga=GA1.1.1736865019.1727965084&semt=ais_hybrid",
  },
  {
    id: 3,
    review: "The best car purchasing experience I've ever had!",
    customer: "Michael Johnson",
    stars: 5,
    image:
      "https://img.freepik.com/premium-photo/young-arabic-girl-with-detailed-skin-texture_1130181-33033.jpg?ga=GA1.1.1736865019.1727965084&semt=ais_hybrid",
  },
  {
    id: 4,
    review: "Professional and attentive service. I'm very satisfied.",
    customer: "Emily Davis",
    stars: 4,
    image:
      "https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-146312.jpg?ga=GA1.1.1736865019.1727965084&semt=ais_hybrid",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the testimonial index
  const updateIndex = (newIndex) => {
    setCurrentIndex((prevIndex) => {
      if (newIndex < 0) return testimonials.length - 1;
      if (newIndex >= testimonials.length) return 0;
      return newIndex;
    });
  };

  const handlePrev = () => updateIndex(currentIndex - 1);
  const handleNext = () => updateIndex(currentIndex + 1);

  // Automatic scrolling every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      updateIndex(currentIndex + 1);
    }, 5 * 1000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [currentIndex]);

  return (
    <section className="bg-[#e4e4e4] w-full min-h-screen flex py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <div className="bg-white shadow-md rounded-lg p-6 text-center relative">
          {/* User Image */}
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].customer}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <div className="flex justify-center mb-4">
            {/* Render star icons based on the rating */}
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                className={
                  index < testimonials[currentIndex].stars
                    ? "text-yellow-500"
                    : "text-gray-300"
                }
              >
                ★
              </span>
            ))}
          </div>
          <p className="italic mb-4">"{testimonials[currentIndex].review}"</p>
          <p className="font-bold">{testimonials[currentIndex].customer}</p>

          {/* Navigation Buttons inside the card */}
          <div className="flex justify-between mt-4">
            <button
              onClick={handlePrev}
              className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-l"
            >
              <FaArrowLeftLong />
            </button>
            <button
              onClick={handleNext}
              className="bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-r"
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
