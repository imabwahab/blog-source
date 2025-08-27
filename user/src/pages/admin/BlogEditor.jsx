import { useAppContext } from "../../components/context/AppContext";
import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import Quill from "quill";
import { parse } from "marked";
import Loader from "../../components/layout/Loader"

const BlogEditor = () => {
  const { axios } = useAppContext();

  const [isAdding, setIsAdding] = useState(false); // Publish button state
  const [image, setImage] = useState(null); // image select state
  const [imagePreview, setImagePreview] = useState(null); // selected image preview state
  const [inputData, setinputData] = useState({
    title: '',
    subTitle: '',
    category: 'Startup',
    description: '',
    isPublished: false
  });

  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [loading, setLoading] = useState(false); // Loader's state

  //  Handle text/select/textarea changes
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

  //  Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsAdding(true);
      // Get content from Quill editor
      const content = quillRef.current?.root.innerHTML || "";
      const blogData = {
        ...inputData,
        description: content,
      };
      const formData = new FormData();
      formData.append('blog', JSON.stringify(blogData));
      if (image) formData.append('image', image);

      const { data } = await axios.post('/api/blog/add', formData);

      if (data.success) {
        toast.success(data.message);

        setinputData({
          title: '',
          subTitle: '',
          category: 'Startup',
          description: '',
          isPublished: false
        });
        setImage(null);
        setImagePreview(null);
        quillRef.current.root.innerHTML = null;
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

  const generateContent = async () => {
    if (!inputData.title) {
      return toast.error('Please enter a title');
    }
    try {
      setLoading(true);
      const { data } = await axios.post('/api/blog/generate', { prompt: inputData.title })
      if (data.success) {
        quillRef.current.root.innerHTML = parse(data.content);
      }
      else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);

    }
  }

  useEffect(() => {
    // Intiate Quill only once 
    if (!quillRef.current && editorRef.current) { quillRef.current = new Quill(editorRef.current, { theme: 'snow' }) }
  }, []);

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
            <option value="Startup">Startup</option>
            <option value="Technology">Technology</option>
            <option value="LifeStyle">LifeStyle</option>
            <option value="Finance">Finance</option>
            <option value="Growth">Growth</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Blog Description
          </label>
          <div className="relative">
            <div ref={editorRef}
              className="border border-gray-300 bg-white min-h-[200px]" >
            </div>

            {loading && <div className="absolute bg-black/10 top-0 bottom-0 left-0 right-0  flex items-center justify-center h-full w-full">
              <Loader />
            </div>}

            <button
              type="button"
              disabled={loading}
              onClick={generateContent}
              className="absolute bottom-2 right-2 text-xs sm:text-sm bg-black/80 text-white px-3 py-1.5 rounded-lg shadow hover:bg-black transition" >
              Generate with AI
            </button>
          </div>
        </div>

        {/* Image Upload */}
        <div>
          <label className=" text-sm font-medium flex items-center text-gray-700"> Cover Image </label>
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

        {/* Publish Toggle */}
        <div className="flex items-center">
          <input
            type="checkbox"
            name="isPublished"
            checked={inputData.isPublished}
            onChange={(e) =>
              setinputData((prev) => ({
                ...prev,
                isPublished: e.target.checked, // ✅ ensures true/false
              }))
            }
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label className="ml-2 block text-sm text-gray-700">
            Publish Immediately
          </label>
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
