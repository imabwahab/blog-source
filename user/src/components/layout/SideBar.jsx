import { NavLink, useLocation } from 'react-router-dom';
import { FiHome, FiPlus, FiList, FiMessageCircle } from 'react-icons/fi';

function SideBar() {
  const location = useLocation();

  const links = [
    { name: 'Dashboard', to: '/admin', icon: <FiHome /> },
    { name: 'Add Blogs', to: '/admin/add-blog', icon: <FiPlus /> },
    { name: 'Blog Lists', to: '/admin/blog-list', icon: <FiList /> },
    { name: 'Comments', to: '/admin/comments', icon: <FiMessageCircle /> },
  ];

  return (
    <div className="h-screen bg-white border-r border-gray-200 shadow-sm fixed top-[60px] left-0 py-8">

      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.to}
              className={`flex items-center gap-3 px-6 py-2 transition 
                ${location.pathname === link.to
                  ? 'bg-[#5044E5] text-white'
                  : 'text-gray-700 hover:bg-gray-100 hover:border-r-3 hover:border-r-[#5044E5]'
                }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-md font-medium hidden sm:block">{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
