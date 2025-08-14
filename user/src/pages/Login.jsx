
function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
      <div className="bg-white shadow-2xl border-2 border-fuchsia-200  rounded-lg w-full max-w-sm p-8 space-y-6 transition duration-300">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#5044E5]">Admin Panel</h1>
          <p className="text-gray-600 mt-1">Login to your account</p>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border-b-2 border-gray-400  focus:ring-[#5044E5] focus:border-[#5044E5] outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border-b-2 border-gray-400   focus:ring-[#5044E5] focus:border-[#5044E5] outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#5044E5] hover:bg-[#3c34b3] transition text-white font-semibold rounded-md shadow-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
