import React, { useState } from 'react';

const CreateBlogPost = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    subTitle: '',
    category: '',
    description: '',
    image: null,
    imagePreview: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can validate or clean formData here
    if (onSubmit) {
      onSubmit(formData);
    }

    // Reset (optional)
    setFormData({
      title: '',
      subTitle: '',
      category: '',
      description: '',
      image: null,
      imagePreview: null,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Create New Blog Post</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
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
            value={formData.subTitle}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={formData.category}
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
            value={formData.description}
            onChange={handleChange}
            required
            placeholder="<p>Write your content here...</p>"
            className="mt-1 w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500 font-mono"
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Cover Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-500"
          />
          {formData.imagePreview && (
            <img
              src={formData.imagePreview}
              alt="Preview"
              className="mt-4 w-full h-48 object-cover rounded-md shadow"
            />
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Publish Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogPost;
