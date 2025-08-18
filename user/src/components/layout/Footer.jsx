import { Link } from "react-router-dom";
import { assets, footer_quickLinks, footer_socialLinks, footer_categories, admin_routes } from "../../assets/assets";

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
            {footer_quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-gray-600 hover:underline transition duration-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

{/* Admin Dashboard Links */}
         <div>
          <h3 className="text-lg font-semibold mb-4">Admin Routes</h3>
          <ul className="space-y-2 text-sm">
            {admin_routes.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-gray-600 hover:underline transition duration-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            {footer_categories.map((category, index) => (
              <li key={index}>
                <Link
                  to={category.path}
                  className="hover:text-gray-600 hover:underline transition duration-400"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {footer_socialLinks.map((social, index) => {
              const Icon = social.icon; // Uppercase since it's a component
              return (
                <a
                  key={index}
                  href={social.href}
                  className="hover:text-gray-600 transition duration-400"
                >
                  <Icon />
                </a>
              );
            })}
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
