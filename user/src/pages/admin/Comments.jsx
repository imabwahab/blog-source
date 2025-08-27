import { useEffect, useState } from "react";
import { useAppContext } from "../../components/context/AppContext";
import toast from "react-hot-toast";
import CommentTableItems from "../../components/admin/CommentTableItems";
import Loader from "../../components/layout/Loader";

const AdminComments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const { axios } = useAppContext();

  const fetchComments = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get('/api/admin/comments');
      if (data.success) {
        setComments(data.comments);
      }
      else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsLoading(false);
    }
  }

  const handleApprove = async (id) => {
    try {
      const { data } = await axios.post('/api/admin/approve-comment', { id });
      if (data.success) {
        fetchComments();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.post('/api/admin/delete-comment', { id });
      if (data.success) {
        fetchComments();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [])
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Manage Comments</h2>

      {/* Responsive wrapper */}
      <div className="w-full overflow-x-auto">
        <table className="min-w-full sm:min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr className="text-left text-sm">
              <th className="px-4 py-2 hidden sm:table-cell">Name</th>
              <th className="px-4 py-2">Comment</th>
              <th className="px-4 py-2 hidden md:table-cell">Blog</th>
              <th className="px-4 py-2 hidden lg:table-cell">Date</th>
              <th className="px-4 py-2 hidden md:table-cell">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoading ?
              <tr>
                <td colSpan="6" className="px-4 py-8">
                  <div className="flex w-full h-full items-center justify-center">
                    <Loader />
                  </div>
                </td>
              </tr> : <CommentTableItems comments={comments} handleApprove={handleApprove} handleDelete={handleDelete} />}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default AdminComments;
