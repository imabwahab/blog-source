import { assets, navbar_data } from "../../assets/assets";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Navbar = ({ value }) => {
  let btnName;
  let Icon;

  const navbarSel = (value) => {
    btnName = value ? navbar_data.login.name : navbar_data.logout.name
    Icon = value ? navbar_data.login.icon : navbar_data.logout.icon;
  }

  navbarSel(value);

  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-6 py-2 sm:py-3 bg-white sticky top-0 z-10 h-[60px] shadow">
      <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="h-6 w-auto" />

      <div>
        <button onClick={() => navigate('/login')} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-3xl hover:bg-blue-700 cursor-pointer transition-all duration-200">
          {btnName}
          <Icon className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
