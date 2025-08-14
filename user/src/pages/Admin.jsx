import CreateBlogPost from "../components/CreateBlogPost";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

function Admin() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Navbar */}
      <Navbar />

      {/* Sidebar + Main Content */}
      <div className="flex flex-1 pt-[60px]">
        <SideBar />

        <main className="flex-1 ml-18 sm:ml-40 px-4">
          <CreateBlogPost />
          <Footer />
        </main>
      </div>


    </div>
  );
}

export default Admin;
