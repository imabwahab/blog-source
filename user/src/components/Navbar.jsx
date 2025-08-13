import React from "react";
import { assets } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
 
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center px-6 py-2 sm:py-3 bg-white sticky top-0 z-10 shadow">
      {/* Logo and Brand */}
        <img onClick={()=> navigate('/')} src={assets.logo} alt="Logo" className="h-8 w-auto" />

      {/* Login Button */}
      <div>
        <button onClick={()=> navigate('/admin')} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-3xl hover:bg-blue-700 cursor-pointer transition-all duration-200">
          Login
          <FaArrowRight className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
