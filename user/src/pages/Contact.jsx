import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import NewsletterSignup from "../components/blogs/NewsLetterSignup";

const Contact = () => {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Navbar />
      <section className="py-16 px-4 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg">
            Have questions, suggestions, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      <NewsletterSignup />
      {/* Contact Form & Info */}
      <section className="py-16 px-4 mt-10  bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li>
                <strong>Address:</strong> 1234 Startup Lane, Tech City, TX 75001
              </li>
              <li>
                <strong>Email:</strong> support@example.com
              </li>
              <li>
                <strong>Phone:</strong> +1 (555) 123-4567
              </li>
              <li>
                <strong>Business Hours:</strong> Mon - Fri, 9AM - 5PM
              </li>
              <li className="flex space-x-4 mt-4">
                {/* Replace with actual icons or use a library like react-icons */}
                <a href="#" className="hover:text-blue-600">Facebook</a>
                <a href="#" className="hover:text-blue-600">Twitter</a>
                <a href="#" className="hover:text-blue-600">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
