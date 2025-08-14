import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { blog_data } from "../assets/assets";
import BlogPost from "../components/BlogPost";
import { Route } from "react-router-dom";

function Blog() {
  return (
    <div>
      <Navbar />
      {blog_data.map((item) => {
        return (
          <BlogPost blog={item} />
        )
      })}

      <Footer />
    </div>
  );
}

export default Blog;
