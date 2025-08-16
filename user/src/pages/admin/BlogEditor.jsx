
import CreateBlogPost from '../../components/admin/CreateBlogPost';

const handleBlogSubmit = (formData) => {
  console.log('Blog submitted:', formData);
  // Example: Upload to backend or save locally
  // You'd normally POST this to your API/backend
};

const BlogEditor = () => {
  return (
      <CreateBlogPost onSubmit={handleBlogSubmit} />
  );
};

export default BlogEditor;
