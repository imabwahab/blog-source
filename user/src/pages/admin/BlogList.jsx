import { useEffect, useState } from "react";
import { blog_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";
import BlogTableHeadings from "../../components/admin/BlogTableHeadings";

const AdminBlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blog_data);
  }, []);

  const HandleUnPublish = (id) => {
    console.log(id);
    const updated = blogs.filter((blog) => blog._id !== id);
    setBlogs(updated);
  }

  return (
    <div className=" py-2 px-3 md:px-6 lg:px-10">
      <h3 className="text-xl font-semibold mb-4 p-4 text-gray-700">All Blogs</h3>
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <BlogTableHeadings />
          </thead>

          <tbody className="divide-y divide-x divide-gray-200">
            <BlogTableItem blogs={blogs} HandleUnPublish={HandleUnPublish} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBlogList;
