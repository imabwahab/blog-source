import React from "react";
import { dashboard_data } from "../../assets/assets";

const AdminDashboard = () => {
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Dashboard Overview
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <SummaryCard label="Total Blogs" value={dashboard_data.blogs} color="bg-blue-100 text-blue-700" />
        <SummaryCard label="Comments" value={dashboard_data.comments} color="bg-green-100 text-green-700" />
        <SummaryCard label="Drafts" value={dashboard_data.drafts} color="bg-yellow-100 text-yellow-700" />
      </div>

      {/* Recent Blogs */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Recent Blogs</h3>
        <div className="space-y-4">
          {dashboard_data.recentBlogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div className="flex-1 space-y-1">
                <h4 className="text-md font-semibold text-gray-900 truncate">{blog.title}</h4>
                <p className="text-sm text-gray-600">
                  <strong>Category:</strong> {blog.category}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Created:</strong> {new Date(blog.createdAt).toLocaleDateString()}
                </p>
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
              <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-1.5 rounded transition">
                  Edit
                </button>
                <button className="text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SummaryCard = ({ label, value, color }) => (
  <div className={`p-5 rounded-lg shadow-sm border border-gray-200 ${color}`}>
    <h4 className="text-sm font-medium mb-1">{label}</h4>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default AdminDashboard;
