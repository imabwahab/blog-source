import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import { comments_data } from '../../assets/assets'; // Adjust path as needed

const CommentList = () => {
  return (
    <div className="px-6 py-10 sm:px-12 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#5044E5] mb-8">User Comments</h2>

      <div className="space-y-6">
        {comments_data.map((comment) => (
          <div
            key={comment._id}
            className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all bg-white"
          >
            {/* User Info */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="text-2xl text-[#5044E5]">
                  <FaRegUserCircle />
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-800">{comment.name}</div>
                  <div className="text-xs text-gray-500">
                    {new Date(comment.createdAt).toLocaleDateString()} at{' '}
                    {new Date(comment.createdAt).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              </div>

              {/* Status */}
              <div
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  comment.isApproved
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {comment.isApproved ? 'Approved' : 'Pending'}
              </div>
            </div>

            {/* Comment Content */}
            <div className="mt-2 text-gray-700 text-sm leading-relaxed">
              {comment.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
