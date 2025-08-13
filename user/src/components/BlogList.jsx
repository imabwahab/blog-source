import { blogCategories } from "../assets/assets";
function BlogList({ activeTag, HandleActiveTag }) {
  return (
    <div className="w-full py-6">
      <ul className="flex flex-wrap justify-center gap-4">
        {blogCategories.map((tag) => (
          <li
            key={tag}
            onClick={() => HandleActiveTag(tag)}
            className={`px-4 py-2 rounded-full cursor-pointer text-sm  transition duration-200
              ${
                activeTag === tag
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-600"
              }
            `}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
