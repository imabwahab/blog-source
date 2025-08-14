import React from 'react';
import CreateBlogPost from '../components/CreateBlogPost';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const handleBlogSubmit = (formData) => {
  console.log('Blog submitted:', formData);

  // Example: Upload to backend or save locally
  // You'd normally POST this to your API/backend
};

const BlogEditor = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <CreateBlogPost onSubmit={handleBlogSubmit} />
      <Footer />
    </div>
  );
};

export default BlogEditor;
