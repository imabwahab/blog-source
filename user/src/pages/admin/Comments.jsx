import React, { useState } from "react";
import { comments_data } from "../../assets/assets";
import { FaCheck, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const AdminComments = () => {
  const [comments, setComments] = useState(comments_data);

  const handleApprove = (id) => {
    const updated = comments.map((comment) =>
      comment._id === id ? { ...comment, isApproved: true } : comment
    );
    setComments(updated);
  };

  const handleDelete = (id) => {
    const updated = comments.filter((comment) => comment._id !== id);
    setComments(updated);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Manage Comments</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr className="text-left text-sm">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Comment</th>
              <th className="px-4 py-2">Blog</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {comments.map((comment) => (
              <tr key={comment._id} className="border-t text-sm">
                <td className="px-4 py-2">{comment.name}</td>
                <td className="px-4 py-2 max-w-xs truncate">{comment.content}</td>
                <td className="px-4 py-2">
                  <Link
                    to={`/blog/${comment.blog._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {comment.blog.title}
                  </Link>
                </td>
                <td className="px-4 py-2">
                  {(new Date(comment.createdAt), "dd MMM yyyy")}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${comment.isApproved
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                      }`}
                  >
                    {comment.isApproved ? "Approved" : "Pending"}
                  </span>
                </td>
                <td className="px-4 py-2 flex items-center space-x-3">
                  {!comment.isApproved && (
                    <button
                      onClick={() => handleApprove(comment._id)}
                      className="text-green-600 hover:text-green-800"
                      title="Approve"
                    >
                      <FaCheck />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(comment._id)}
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}

            {comments.length === 0 && (
              <tr>
                <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                  No comments to show.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminComments;
