import { FaRegUserCircle } from "react-icons/fa";

const CommentList = ({ comments }) => {
  return (
    <div className="px-6 py-10 sm:px-12 max-w-5xl mx-auto">
      {/* Header with comment count */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-[#5044E5] flex items-center gap-2">
          User Comments
          <span className="text-sm bg-[#5044E5] text-white px-3 py-1 rounded-full">
            {comments?.length || 0}
          </span>
        </h2>
      </div>

      {comments?.length === 0 ? (
        <p className="text-gray-500 italic">No comments yet. Be the first to share your thoughts!</p>
      ) : (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div
              key={comment._id}
              className="border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-all bg-white"
            >
              {/* User Info */}
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl text-[#5044E5]">
                  <FaRegUserCircle />
                </div>
                <div>
                  <div className="text-base font-semibold text-gray-800">
                    {comment.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(comment.createdAt).toLocaleDateString()} •{" "}
                    {new Date(comment.createdAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>

              {/* Comment Content */}
              <div className="text-gray-700 text-sm leading-relaxed border-t pt-3">
                {comment.content}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentList;
