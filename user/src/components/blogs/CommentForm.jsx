import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;
    onSubmit({ name, content: comment });
    setName('');
    setComment('');
  };

  return (
    <div className=" shadow-md rounded-lg px-5 sm:px-10 py-10 sm:mx-50 mt-10 mx-6  bg-white">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Leave a Comment</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name input */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Your Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Comment input */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Your Comment</label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your comment here..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="bg-[#5044E5] hover:bg-[#3c32d1] text-white px-6 py-2 rounded-md transition"
          >
            Post Comment
          </button>
        </div>

      </form>
    </div>
  );
};

export default CommentForm;
