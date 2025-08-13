import { Link } from "react-router-dom";
import { FaXTwitter, FaTelegram } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <img
            src={assets.logo}
            alt="Logo"
            className="h-8 w-auto"
          />
          <p className="text-sm">
            Bringing you quality content and ideas every week.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-400">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
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
              <a href="/category/design" className="hover:text-white">
                Design
              </a>
            </li>
            <li>
              <a href="/category/tech" className="hover:text-white">
                Tech
              </a>
            </li>
            <li>
              <a href="/category/lifestyle" className="hover:text-white">
                Lifestyle
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-500">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-gray-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-500">
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
