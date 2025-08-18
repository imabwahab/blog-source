import { NavLink, useLocation } from 'react-router-dom';
import { admin_routes } from '../../assets/assets';
function SideBar() {
  const location = useLocation();

  return (
    <div className="h-screen bg-white border-r border-gray-200 shadow-sm fixed top-[60px] left-0 py-8">

      <ul className="space-y-4">
        {admin_routes.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={`flex items-center gap-3 px-3 sm:px-6 py-2 transition 
                ${location.pathname === link.path
                  ? 'bg-[#5044E5] text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:border-r-3 hover:border-r-[#5044E5]'
                }`}
            >
              <span className="text-xl">{<link.icon />}</span>
              <span className="text-md font-medium hidden sm:block">{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
