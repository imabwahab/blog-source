import { useRef } from "react";
import { BiSolidStarHalf } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { useAppContext } from "../context/AppContext";

function HeroSection() {

  const { input, setInput } = useAppContext();
  const inputRef = useRef();

  const HandleFormSubmit = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  }

  const HandleClearHistory = () => {
    setInput('');
    inputRef.current.value = '';
  }


  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-fuchsia-200 to-purple-200">
      {/* Floating gradient blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-fuchsia-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Hero Content */}
      <div className="relative min-h-[70vh] flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-4xl text-center">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 text-blue-600 px-4 py-1 shadow-sm border border-gray-200">
            <BiSolidStarHalf className="text-blue-600 text-sm" />
            <span className="text-xs sm:text-sm font-medium">
               Fresh: AI-Powered Blogging
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-snug text-gray-700 racking-tight">
            Create, Share & Explore{" "}
            <span className="bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent font-bold">
              Stories
            </span>{" "}
            that Matter
          </h1>

          {/* Subtext */}
          <p className="mt-5 text-gray-700 max-w-2xl mx-auto text-lg sm:text-xl">
            A powerful yet simple blogging platform designed for creators. Share
            your thoughts, connect with readers, and make your voice heard.
          </p>

          {/* Search Bar */}
          <div className="mx-auto mt-8 w-full max-w-2xl">
            <form
              onSubmit={HandleFormSubmit}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0 rounded-2xl border border-gray-200 bg-white/90 backdrop-blur px-3 py-3 sm:py-2 shadow-lg ring-1 ring-black/5">
              {/* Input with Icon */}
              <div className="relative flex-1">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  ref={inputRef}
                  placeholder="Search blogs, tags, or authors..."
                  className="w-full bg-transparent outline-none pl-10 pr-4 text-sm sm:text-base text-gray-700 placeholder:text-gray-400"
                />
              </div>

              {/* Button */}
              <button type="submit" className="w-full sm:w-auto mt-2 sm:mt-0 sm:ml-2 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
                Search
              </button>
            </form>
          </div>


          {/* Reset Button */}
          {input.length !== 0 && <div className="mt-8">
            <button
              onClick={() => HandleClearHistory()}
              className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-500 text-white font-medium shadow-md hover:opacity-90 transition"
            >
              Clear History
            </button>
          </div>}
        </div>
      </div>

      {/* Decorative wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-20 text-white"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,224L60,218.7C120,213,240,203,360,192C480,181,600,171,720,176C840,181,960,203,1080,197.3C1200,192,1320,160,1380,144L1440,128V320H0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default HeroSection;
