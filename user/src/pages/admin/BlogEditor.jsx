
import CreateBlogPost from '../../components/admin/CreateBlogPost';

const handleBlogSubmit = (formData) => {
  console.log('Blog submitted:', formData);
};

const BlogEditor = () => {
  return (
      <CreateBlogPost onSubmit={handleBlogSubmit} />
  );
};

export default BlogEditor;
