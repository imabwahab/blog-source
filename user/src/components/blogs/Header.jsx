import { BiSolidStarHalf } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

function Header() {
  return (
    <div className="relative mt-8 overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-300 via-white to-white" />

      <div className="relative min-h-[60vh] h-50 sm:min-h-[80vh] flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 ring-1 ring-primary/15 border">
            <span className="text-xs font-medium">
              New: AI feature integrated
            </span>
            <BiSolidStarHalf className="text-sm" />
          </div>

          <h1 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-black/75">
            Your own{" "}
            <span className="bg-gradient-to-r from-primary to-fuchsia-500 bg-clip-text text-transparent">
              blogging
            </span>{" "}
            platform.
          </h1>

          <p className="mt-4 text-gray-600">
            This is your space to think out loud, to share what matters, and to
            write without filters. Whether it's one word or a thousand, your
            story starts right here.
          </p>

          <div className="mx-auto mt-6 w-full max-w-xl">
            <div className="relative flex items-center rounded-full border border-gray-200 bg-white/80 backdrop-blur px-3 py-2 shadow-md ring-1 ring-black/5">
              <FiSearch className="absolute left-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for blogs"
                className="w-full bg-transparent outline-none pl-9 pr-14 sm:pr-28 text-sm sm:text-base text-gray-700 placeholder:text-gray-400"
              />
              <button className="ml-2 bg-primary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors cursor-pointer">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
