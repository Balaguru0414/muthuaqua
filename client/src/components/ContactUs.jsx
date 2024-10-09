import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (error) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 1000 * 3);

      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:2020/mail/send", {
        name,
        email,
        phone,
        message,
      });

      const data = response.data;
      setError(data.msg);
      setStatus(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      if (error.response) {
        setStatus(false);
        setError(error.response.data.msg);
      }
      console.error(error.message);
    }
  };
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex py-20 px-4 bg-[#f0f4f8]"
    >
      <div className="w-full flex flex-col md:flex-row">
        {/* Left Part: Contact Form */}
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6 m-2">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 mb-2" htmlFor="phone">
                Phone No. <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>

            <div className="mb-3">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="w-full p-2 border border-gray-300 rounded"
                rows="5"
              ></textarea>
            </div>

            <div className="flex items-center gap-5">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Send Message
              </button>
              {visible && (
                <p
                  className={` ${
                    status
                      ? "px-2 border-2 rounded-md text-green-500 border-green-500"
                      : "px-2 border-2 rounded-md text-red-500 border-red-500"
                  }`}
                >
                  {error}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Right Part: Google Map */}
        <div className="w-full md:w-1/2  bg-white shadow-lg rounded-lg p-4 m-2">
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <div className="h-64">
            <iframe
              className="md:h-96 h-72"
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d377.58856899674095!2d78.69936082978167!3d10.829896029181599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1728052985787!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
