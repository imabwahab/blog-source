import BlogCard from "./BlogCard";
import { blog_data } from "../../assets/assets";

function Cards({ activeTag }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {blog_data
        .filter((item) => activeTag === "All" || activeTag === item.category)
        .map((item) => {
          return (
            <BlogCard
              key={item._id}
              id={item._id}
              image={item.image}
              title={item.title}
              subtitle={item.subTitle}
              tag={item.category}
            />
          );
        })}
    </div>
  );
}

export default Cards;
