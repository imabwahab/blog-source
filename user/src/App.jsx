import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import "./App.css";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogEditor from "./pages/BlogEditor";
import BlogPost from './components/BlogPost'
import Login from "./pages/Login";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create" element={<BlogEditor />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>
  );
}

export default App;
