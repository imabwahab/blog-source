import BlogCard from "./BlogCard";
import { useAppContext } from "../context/AppContext";
import Loader from "../layout/Loader";
import { useState, useEffect } from "react";

function Cards({ activeTag }) {
  const { blog } = useAppContext();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[40vh]">
        <Loader />
      </div>
    );
  }

  if (blog.length === 0) {
    return <p className="italic text-gray-500 font-mono text-center p-3 ">No blog to display</p>;
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {blog
        .filter((item) => activeTag === "all" || activeTag === item.category)
        .map((item) => (
          <BlogCard
            key={item._id}
            id={item._id}
            image={item.image}
            title={item.title}
            subtitle={item.subTitle}
            tag={item.category}
          />
        ))}
    </div>
  );
}

export default Cards;
