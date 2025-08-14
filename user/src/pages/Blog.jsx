import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogPost from "../components/BlogPost";
import { blog_data, comments_data } from "../assets/assets";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

function Blog() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      const dataFound = blog_data.find((item) => item._id === id);
      const comments = comments_data.find(item => item._id === id);
      setData(dataFound);
      setComments(comments);
      console.log("Fetched blog:", comments);
    };

    fetchBlogData();
  }, [id]);

  return (
    <div>
      <Navbar />
      {data ? <BlogPost blog={data} /> : <p className="p-6">Loading...</p>}
      <CommentList />
      <CommentForm onSubmit={(comment) => {
        console.log("New comment submitted:", comment);
        // You could push it into local state or send to a backend
      }} />
      <Footer />
    </div>
  );
}

export default Blog;
