import Navbar from "../../components/layout/Navbar";
import SideBar from "../../components/layout/SideBar";
import Footer from "../../components/layout/Footer";

import { Outlet } from "react-router-dom";

function Layout() {
  const value = false;
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar value={value} />

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
