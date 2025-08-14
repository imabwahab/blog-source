import React from 'react';
import { comments_data } from '../assets/assets'; // adjust path if needed

const CommentList = () => {
  return (
    <div className="px-10 py-8 sm:px-20 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-[#5044E5] mb-6">User Comments</h2>

      <div className="space-y-4">
        {comments_data.map((comment) => (
          <div
            key={comment._id}
            className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all bg-white"
          >
            {/* Header: Name and Status */}
            <div className="flex justify-between items-center mb-2">
              <div className="text-lg font-medium text-gray-800">{comment.name}</div>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full ${
                  comment.isApproved
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}
              >
                {comment.isApproved ? 'Approved' : 'Pending'}
              </span>
            </div>

            {/* Content */}
            <p className="text-gray-600 text-sm mb-3">{comment.content}</p>

            {/* Blog info and time */}
            <div className="text-xs text-gray-500 flex flex-wrap items-center gap-4">
              <span>
                <span className="font-medium">Blog:</span>{' '}
                <span className="italic text-gray-600">{comment.blog.title}</span>
              </span>
              <span>
                <span className="font-medium">Posted:</span>{' '}
                {new Date(comment.createdAt).toLocaleDateString()} at{' '}
                {new Date(comment.createdAt).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
