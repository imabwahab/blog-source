const BlogPost = ({ blog }) => {
  return (
    <div className="bg-white min-h-screen text-gray-800 px-10 sm:px-20 pt-10  font-sans">
      {/* Header / Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[70vh] overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover brightness-75 rounded-2xl"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg transition-all duration-300">
              {blog.title}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-200 font-light">
              {blog.subTitle}
            </p>
          </div>
        </div>
      </div>

      {/* Metadata Section */}
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-b border-gray-200">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-medium">
            {blog.category}
          </span>
          <span className="text-sm text-gray-500">
            Published on{" "}
            <span className="font-medium text-gray-700">
              {new Date(blog.createdAt).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </span>
          <span className="text-sm text-gray-400 hidden sm:inline">•</span>
          <span className="text-sm text-gray-500 hidden sm:inline">
            ~ 5 min read
          </span>
        </div>

        <div className="flex items-center gap-3">
          
          <div className="text-sm">
            <p className="text-gray-700 font-semibold">Admin</p>
            <p className="text-gray-500 text-xs">Editor-in-Chief</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <article
          className="prose prose-lg prose-indigo max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        />
      </div>

      {/* Tags / Footer */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        {blog.tags && blog.tags.length > 0 && (
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
