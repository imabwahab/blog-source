import React from "react";

function BlogCard({ image, title, subtitle, tag }) {
  return (
    <div className="max-w-[300px] rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition duration-300">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        {/* Tag */}
        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {tag}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>

        {/* Subtitle / Description */}
        <p className="text-gray-600 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

export default BlogCard;
