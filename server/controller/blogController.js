import fs from 'fs';
import imagekit from '../configs/imagekit.js';
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);
    const imageFile = req.file;

    // check if all fields are present
    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: "Missing required fields" })
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    // Upload Image to ImageKit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: '/blogImages'
    });

    // optimization through imageKit URL transformation
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: 'auto' }, // Auto compression
        { format: 'webp' }, // Convert to modern format
        { width: '1280' } // Widht resizing
      ]
    });

    const image = optimizedImageUrl;
    await Blog.create({ title, subTitle, description, category, image, isPublished });

    res.json({ success: true, message: 'Blog added successfully' })

  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });

    res.json({ success: true, message: 'Got all the Blogs', blogs });
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId); // ✅ correct method
    if (!blog) {
      return res.json({ success: false, message: 'Blog not found' });
    }
    res.json({ success: true, message: 'Got blog by Id', blog });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}


export const DeleteBlogById = async (req, res) => {
  try {
    const { blogId } = req.body;
    await Blog.findByIdAndDelete(blogId);

    // Delete all comments associated with the blog
    await Comment.deleteMany({blog: blogId})

    res.json({ success: true, message: 'Delete blog by Id successfully' })
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);

    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json({ success: true, message: 'Blog status Updated.X' })
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}

export const addComment = async (req, res) => {
  try {
    const { blog, name, content } = req.body;
    await Comment.create({ blog, name, content });

    res.json({ success: true, message: 'Comment added for review' });

  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}

export const getBlogComments = async (req, res) => {
  try {
    const {blogId} = req.body;
    const comments = await Comment.find({blog: blogId, isApproved: true}).sort({createdAt: -1});
    
    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message })
  }
}