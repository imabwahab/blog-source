import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogEditor from "./pages/admin/BlogEditor";
import Layout from "./pages/admin/Layout";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdminComments from "./pages/admin/Comments";
import AdminBlogList from "./pages/admin/BlogList";
import Loader from "./components/layout/Loader";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./components/context/AppContext";
import { useEffect, useState } from "react";


function App() {
  const { token } = useAppContext();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div >
    )
  }

  return (
    <div>
      <Toaster />
      <Routes>
        <Route path="/loader" element={<Loader />} />
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin/dashboard" element={token ? <Layout /> : <Login />} >
          <Route index element={<Dashboard />} />
          <Route path="add-blog" element={<BlogEditor />} />
          <Route path="blog-list" element={<AdminBlogList />} />
          <Route path="comments" element={<AdminComments />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
