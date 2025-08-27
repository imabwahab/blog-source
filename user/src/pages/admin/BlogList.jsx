import { useEffect, useState } from "react";
import BlogTableItem from "../../components/admin/BlogTableItem";
import BlogTableHeadings from "../../components/admin/BlogTableHeadings";
import { useAppContext } from "../../components/context/AppContext"
import toast from "react-hot-toast";
import Loader from "../../components/layout/Loader"

const AdminBlogList = () => {

  const { axios } = useAppContext();

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const FetchBlogList = async () => {
    try {
      setLoading(true)
      const { data } = await axios.get('/api/admin/blogs');
      if (data.success) {
        setBlogs(data.blogs);
      }
      else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchBlogList();
  }, []);

  const HandlePublishStatus = async (id) => {
    try {
      const { data } = await axios.post('/api/blog/toggle-publish', { id: id });

      if (data.success) {
        toast.success(data.message);
        await FetchBlogList();
      }
      else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  const HandleDelete = async (id) => {
    const confirm = window.confirm('Are you sure you want to delete this blog?');
    if (!confirm) return;
    try {
      const { data } = await axios.post('/api/blog/delete', { id });
      if (data.success) {
        toast.success(data.message);
        await FetchBlogList();
      }
      else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className=" py-2 px-3 md:px-6 lg:px-10">
      <h3 className="text-xl font-semibold mb-4 p-4 text-gray-700">All Blogs</h3>
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">

          <thead className="bg-gray-100">
            <BlogTableHeadings />
          </thead>

          <tbody className="divide-y divide-x divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan="6" className="px-4 py-8">
                  <div className="flex w-full h-full items-center justify-center">
                    <Loader />
                  </div>
                </td>
              </tr>

            ) : (
              <BlogTableItem
                blogs={blogs}
                HandlePublishStatus={HandlePublishStatus}
                HandleDelete={HandleDelete}
              />
            )}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AdminBlogList;
