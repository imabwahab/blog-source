import { useEffect, useState } from "react";
import { FaBlog, FaCommentDots, FaRegFileAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import BlogTableItem from "../../components/admin/BlogTableItem";
import BlogTableHeadings from "../../components/admin/BlogTableHeadings";
import { useAppContext } from "../../components/context/AppContext";
import toast from "react-hot-toast";
import Loader from "../../components/layout/Loader"

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  });
  const [loading, setLoading] = useState(true);

  const { axios } = useAppContext();

  const fetchDashboard = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/api/admin/dashboard');
      if (data.success) {
        setDashboardData(data.dashboardData);
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
    fetchDashboard();
  }, []);

  const HandlePublishStatus = async (id) => {
    try {
      const { data } = await axios.post('/api/blog/toggle-publish', { id: id });

      if (data.success) {
        toast.success(data.message);
        await fetchDashboard();
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
        await fetchDashboard();
      }
      else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }



  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-600 flex items-center gap-2">
        <MdDashboard className="text-3xl text-gray-600  " />
        Dashboard Overview
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <SummaryCard
          label="Total Blogs"
          value={dashboardData.blogs}
          color="bg-blue-100 text-blue-700"
          icon={FaBlog}
        />
        <SummaryCard
          label="Comments"
          value={dashboardData.comments}
          color="bg-green-100 text-green-700"
          icon={FaCommentDots}
        />
        <SummaryCard
          label="Drafts"
          value={dashboardData.drafts}
          color="bg-yellow-100 text-yellow-700"
          icon={FaRegFileAlt}
        />

      </div>

      {/* Recent Blogs */}

      <h3 className="text-xl font-semibold mb-4 p-4 text-gray-700">Recent Blogs</h3>
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <BlogTableHeadings />
          </thead>

          <tbody className="divide-y divide-gray-200">
            {loading ?
              <tr>
                <td colSpan="6" className="px-4 py-8">
                  <div className="flex w-full h-full items-center justify-center">
                    <Loader />
                  </div>
                </td>
              </tr> :
              <BlogTableItem
                blogs={dashboardData.recentBlogs}
                HandlePublishStatus={HandlePublishStatus}
                HandleDelete={HandleDelete}
              />
            }
          </tbody>
        </table>
      </div>


    </div>
  );
};

const SummaryCard = ({ label, value, color, icon: Icon }) => (
  <div className={`p-5 rounded-lg shadow-sm border border-gray-200 ${color} flex items-center gap-4`}>
    {Icon && <Icon className="text-3xl" />}
    <div>
      <h4 className="text-sm font-medium mb-1">{label}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);


export default AdminDashboard;
