import { BiImageAdd } from "react-icons/bi";
import { useAppContext } from "../../components/context/AppContext"
import { useState } from "react";
import toast from "react-hot-toast";

const BlogEditor = () => {
  const { axios } = useAppContext();

  const [isAdding, setIsAdding] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [inputData, setinputData] = useState({
    title: '',
    subTitle: '',
    category: 'Startup',
    description: '',
    isPublished:true
  });

  // ✅ Handle text/select/textarea changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      const file = files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setinputData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ✅ Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsAdding(true);

      const formData = new FormData();
      formData.append('blog', JSON.stringify(inputData));
      if (image) formData.append('image', image);

      const { data } = await axios.post('/api/blog/add', formData);

      if (data.success) {
        toast.success(data.message);

        setinputData({
          title: '',
          subTitle: '',
          category: 'Startup',
          description: ''
        });
        setImage(null);
        setImagePreview(null);
      }
      else {
        toast.error(data.message);
      }

    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-4 sm:mx-auto ">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Create New Blog Post</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={inputData.title}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Subtitle */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Subtitle</label>
          <input
            type="text"
            name="subTitle"
            value={inputData.subTitle}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={inputData.category}
            onChange={handleChange}
            required
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a category</option>
            <option value="Lifestyle">Lifestyle</option>
            <option value="Health">Health</option>
            <option value="Career">Career</option>
            <option value="Finance">Finance</option>
            <option value="Personal Growth">Personal Growth</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description (HTML allowed)</label>
          <textarea
            name="description"
            rows={8}
            value={inputData.description}
            onChange={handleChange}
            required
            placeholder="<p>Write your content here...</p>"
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className=" text-sm font-medium flex items-center text-gray-700"><BiImageAdd /> Cover Image </label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 block border rounded-md px-4 py-2 border-gray-300 w-full text-sm text-gray-500"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 w-full h-48 object-cover rounded-md shadow"
            />
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isAdding}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            {isAdding ? 'Publishing...' : 'Publish Blog'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogEditor;
