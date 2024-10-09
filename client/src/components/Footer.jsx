import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { BsInstagram, BsTwitterX, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-20 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-4">
        {/* Get In Touch Section */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold mb-2">Get In Touch</h3>
          <p>
            If you have any questions or need assistance, feel free to reach
            out!
          </p>
          <p className="flex items-center gap-2 mt-2">
            <AiOutlineMail />{" "}
            <a
              href="mailto:contact@example.com"
              className="text-blue-300 hover:text-blue-500"
            >
              Email: contact@example.com
            </a>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <AiOutlinePhone />{" "}
            <a
              href="tel:1234567890"
              className="text-blue-300 hover:text-blue-500"
            >
              {" "}
              Phone: (123) 456-7890
            </a>
          </p>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center hover:text-blue-300"
            >
              <BsFacebook />
              <span>Facebook</span>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <BsTwitterX />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center hover:text-blue-300"
            >
              <BsInstagram />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
