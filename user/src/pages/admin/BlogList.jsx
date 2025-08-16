
import { blog_data } from "../../assets/assets";

const AdminBlogList = () => {
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        All Blog Posts
      </h2>

      <div className="space-y-4">
        {blog_data.map((blog) => (
          <div
            key={blog._id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Blog Info */}
            <div className="flex-1 space-y-1">
              <h3 className="text-lg font-semibold text-gray-900">
                {blog.title}
              </h3>
              <div className="text-sm text-gray-600">
                <strong>Category:</strong> {blog.category}
              </div>
              <div className="text-sm text-gray-500">
                <strong>Created:</strong>{" "}
                {new Date(blog.createdAt).toLocaleDateString()}
              </div>
              <div className="text-sm">
                <span
                  className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                    blog.isPublished
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {blog.isPublished ? "Published" : "Unpublished"}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
              <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-1.5 rounded transition">
                Edit
              </button>
              <button className="text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded transition">
                Delete
              </button>
              <button
                className={`text-sm text-white px-4 py-1.5 rounded transition ${
                  blog.isPublished
                    ? "bg-yellow-500 hover:bg-yellow-600"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                {blog.isPublished ? "Unpublish" : "Publish"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBlogList;
