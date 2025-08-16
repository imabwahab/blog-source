
function NewsletterSignup() {
  return (
    <section className=" py-12 px-4 mt-10 md:px-8 ">
      <div className="max-w-2xl mx-auto text-center bg-white/80 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Don’t Miss Any Update
        </h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter and get the latest posts directly in your inbox.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5044E5]"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-[#5044E5] text-white font-semibold rounded-md hover:bg-[#3c34b3] transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSignup;
