import { assets, navbar_data } from "../../assets/assets";

import { FaMoon, FaSun } from 'react-icons/fa';
import { useAppContext } from "../context/AppContext";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  
  const { navigate, token } = useAppContext();
  const Icon = token ? navbar_data.dashboard.icon : navbar_data.login.icon;
  console.log(token);
  return (
    <div className="flex justify-between items-center px-6 py-2 sm:py-3 bg-white sticky top-0 z-10 h-[60px] shadow">
      <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="h-6 w-auto" />

      <div className="flex items-center gap-3">
        <button onClick={() => navigate(`${token ? '/admin/dashboard' : '/login'}`)} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-3xl hover:bg-blue-700 cursor-pointer transition-all duration-200">
          {token? 'Dashboard' : 'Login'}
          <Icon className="text-lg " />
        </button>
        <button onClick={toggleDarkMode} className="focus:outline-none text-white bg-blue-600 p-2.5 rounded-full">
          {darkMode ? <FaSun className=" " /> : <FaMoon className=" " />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
