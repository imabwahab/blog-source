import { assets, navbar_data } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = ({ value }) => {
  let btnName;
  let Icon;
  let linkto;

  const navbarSel = (value) => {
    btnName = value ? navbar_data.dashboard.name : navbar_data.logout.name
    Icon = value ? navbar_data.dashboard.icon : navbar_data.logout.icon;
    linkto = value? navbar_data.dashboard.to : navbar_data.logout.to;
  }

  navbarSel(value);

  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-6 py-2 sm:py-3 bg-white sticky top-0 z-10 h-[60px] shadow">
      <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="h-6 w-auto" />

      <div>
        <button onClick={() => navigate(linkto)} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-3xl hover:bg-blue-700 cursor-pointer transition-all duration-200">
          {btnName}
          <Icon className="text-lg " />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
