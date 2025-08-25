import { assets } from "../../assets/assets";
import SideBar from "../../components/layout/SideBar";
import Footer from "../../components/layout/Footer";

import { Outlet } from "react-router-dom";
import { useAppContext } from "../../components/context/AppContext";

function Layout() {

  const { navigate } = useAppContext();

  return (
    <div className="min-h-screen flex flex-col">

    {/* Navbar */}
      <div className="flex justify-between items-center px-6 py-2 sm:py-3 bg-white sticky top-0 z-10 h-[60px] shadow">
        <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="h-6 w-auto" />

        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-3xl hover:bg-blue-700 cursor-pointer transition-all duration-200">
            Logout
          </button>
        </div>
      </div>

      {/* Sidebar + Main Content */}
      <div className="flex flex-1 pt-8">
        <SideBar />

        <main className="flex-1 ml-11 sm:ml-40 ">
          <Outlet />
          <Footer />
        </main>
      </div>


    </div>
  );
}

export default Layout;
