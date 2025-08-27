import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BlogPost from "../components/blogs/BlogPost";
import Loader from "../components/layout/Loader"
import CommentList from "../components/blogs/CommentList";
import CommentForm from "../components/blogs/CommentForm";
import { useAppContext } from "../components/context/AppContext";
import toast from "react-hot-toast";

function Blog() {
  const { axios } = useAppContext();
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [comments, setComments] = useState([]);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await fetchBlogData();
      await fetchCommentsData();
    };
    loadData();
  }, [id]);


  const fetchBlogData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/blog/${id}`);
      data.success ? setBlogData(data.blog) : toast.error(data.message);
      console.log(blogData);
    } catch (error) {
      toast.error(error.message);
    }finally{
      setLoading(false);
    }
  }

  const fetchCommentsData = async () => {
    try {
      const { data } = await axios.post('/api/blog/comments', { blogId: id });
      if (data.success) {
        setComments(data.comments);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const addComment = async (comment) => {
    try {
      const { name, content } = comment;

      console.log("New comment submitted:", comment);
      const { data } = await axios.post('/api/blog/add-comment', { blog: id, name, content });

      if (data.success) {
        toast.success(data.message);
      }
      else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div>
      <Navbar />
      {loading ? (
        <div className="h-[40vh] w-full items-center justify-center flex">
          <Loader />
        </div>
      ) : (
        <>
          <BlogPost blog={blogData} />
          <CommentList comments={comments} />
          <CommentForm onSubmit={addComment} />
        </>
      )}


      <Footer />
    </div>
  );
}

export default Blog;
