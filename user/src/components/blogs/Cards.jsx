import BlogCard from "./BlogCard";
import { useAppContext } from "../context/AppContext";
import Loader from "../layout/Loader";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

function Cards({ activeTag }) {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const {axios} = useAppContext();

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/api/blog/all');
      console.log(data)
      data.success ? setBlogs(data.blogs) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
    finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[40vh]">
        <Loader />
      </div>
    );
  }

  if (!loading && blogs.length === 0) {
    return <p className="italic text-gray-500 font-mono text-center p-3 ">No blog to display</p>;
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {blogs
        .filter((item) => activeTag === "all" || activeTag === item.category.toLowerCase())
        .map((item) => (
          
          <BlogCard
            key={item._id}
            id={item._id}
            image={item.image}
            title={item.title}
            subtitle={item.subTitle}
            tag={item.category}
            activeTag={activeTag}
          />
          
        ))}
    </div>
  );
}

export default Cards;
