import { MdOutlineUnpublished } from "react-icons/md";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaDeleteLeft } from "react-icons/fa6";

function BlogTableItem({ blogs, HandlePublishStatus, HandleDelete }) {

  return (
    <>
      {blogs.map((blog, index) => (
        <tr
          key={blog._id}
          className={'transition hover:bg-gray-50 '}
        >
          <td className="px-2 md:px-6 py-4 whitespace-nowrap text-sm  text-gray-900 ">
            {index + 1}
          </td>

          <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm  text-gray-900 max-w-[150px] sm:max-w-[180px] xl:max-w-[400px] truncate">
            {blog.title}
          </td>

          <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm  text-gray-600 max-md:hidden">
            {blog.category}
          </td>

          <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm  text-gray-500 max-lg:hidden">
            {new Date(blog.createdAt).toLocaleDateString()}
          </td>

          <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm  max-sm:hidden">
            <span
              className={`inline-block px-2 py-1 rounded-full text-xs font-medium border 
                      ${blog.isPublished
                  ? "bg-green-100 text-green-700 border-green-300"
                  : "bg-gray-100 text-gray-600 border-gray-300"
                }`}
            >
              {blog.isPublished ? "Published" : "Unpublished"}
            </span>
          </td>

          <td className="px-2 md:px-6 py-4 whitespace-nowrap text-right  text-sm">
            <div className="flex justify-end gap-2">
              <button
                onClick={() => HandlePublishStatus(blog._id)}
                className="flex items-center gap-1 text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-full shadow transition"
                title="Edit blog"
                aria-label={`Edit blog titled ${blog.title}`}
              >
                {blog.isPublished ? (
                  <>
                    <span className="hidden lg:block">Unpublish</span>
                    <MdOutlineUnpublished className="text-xs" />
                  </>
                ) : (
                  <>
                    <span className="hidden lg:block">Publish</span>
                    <MdOutlinePublishedWithChanges className="text-xs" />
                  </>
                )}


              </button>

              <button
                className="flex items-center gap-1 text-sm text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-full shadow transition"
                title="Delete blog"
                aria-label={`Delete blog titled ${blog.title}`}
                onClick={() => HandleDelete(blog._id)}
              >
                <span className="hidden lg:block">Delete</span>
                <FaDeleteLeft className="text-sm" />
              </button>
            </div>
          </td>
        </tr>
      ))}

      {blogs.length === 0 && (
        <tr>
          <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
            No blogs to show.
          </td>
        </tr>
      )}
    </>
  )
}

export default BlogTableItem