import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) return;

    // Optional: Pass comment data to parent
    if (onSubmit) {
      onSubmit({ name, content: comment, createdAt: new Date() });
    }

    setSubmitted(true);
    setName('');
    setComment('');

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className=" shadow-md rounded-lg px-10 py-10 sm:mx-50 mt-10 mx-10  bg-white">
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

        {/* Confirmation Message */}
        {submitted && (
          <p className="text-green-600 text-sm pt-2">Thanks! Your comment was submitted.</p>
        )}
      </form>
    </div>
  );
};

export default CommentForm;
