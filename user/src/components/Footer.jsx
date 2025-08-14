import { Link } from "react-router-dom";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-white border-t-1 text-gray-800 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img
            src={assets.logo}
            alt="Logo"
            className="h-8 w-auto"
          />
          <p className="text-sm pt-3">
            Bringing you quality content and ideas every week.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-gray-600 hover:underline transition duration-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/add-blog" className="hover:text-gray-600 hover:underline transition duration-400">
                CreateBlog
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-600 hover:underline transition duration-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-600 hover:underline transition duration-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/lifestyle" className="hover:text-gray-600 hover:underline transition duration-400">
                Lifestyle
              </Link>
            </li>
            <li>
              <Link to="/technology" className="hover:text-gray-600 hover:underline transition duration-400">
                Technology
              </Link>
            </li>
            <li>
              <Link to="/startup" className="hover:text-gray-600 hover:underline transition duration-400">
                Startup
              </Link>
            </li>
            <li>
              <Link to="/finance" className="hover:text-gray-600 hover:underline transition duration-400">
                Finance
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-600 transition duration-400">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-600">
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Quickblog . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
