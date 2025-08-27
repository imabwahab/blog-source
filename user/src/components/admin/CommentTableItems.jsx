
import { FaTrash } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CommentTableItems = ({ comments, handleApprove, handleDelete }) => {
  return (
    <>
      {
        comments.map((comment) => (
          <tr key={comment._id} className="border-t text-sm">
            <td className="px-4 py-2 whitespace-nowrap hidden sm:table-cell" >
              {comment.name}
            </td>
            <td className="px-4 py-2 max-w-[150px] sm:max-w-[180px] xl:max-w-[400px] truncate ">
              {comment.content}
            </td>
            <td className="px-4 py-2 hidden md:table-cell">
              <Link
                to={`/blog/${comment.blog._id}`}
                className=" hover:underline"
              >
                {comment.blog.title}
              </Link>
            </td>
            <td className="px-4 py-2  hidden lg:table-cell whitespace-nowrap">
              {new Date(comment.createdAt).toLocaleDateString()}
            </td>

            <td className="px-4 py-2  hidden md:table-cell">
              <span
                className={`px-2 py-1 text-xs rounded-full ${comment.isApproved
                  ? "bg-green-100 text-green-800"
                  : "bg-yellow-100 text-yellow-800"
                  }`}
              >
                {comment.isApproved ? "Approved" : "Pending"}
              </span>
            </td>

            <td className="px-4 py-2">
              <div className="flex items-center space-x-3">
                {!comment.isApproved && (
                  <button
                    onClick={() => handleApprove(comment._id)}
                    className="text-green-600 hover:text-green-800"
                    title="Approve"
                  >
                    <FaCircleCheck />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(comment._id)}
                  className="text-red-600 hover:text-red-800"
                  title="Delete"
                >
                  <FaTrash />
                </button>
              </div>
            </td>
          </tr>
        ))
      }

      {comments.length === 0 && (
        <tr>
          <td
            colSpan="6"
            className="px-4 py-8 text-center text-gray-500"
          >
            No comments to show.
          </td>
        </tr>
      )}
    </>
  )

}

export default CommentTableItems