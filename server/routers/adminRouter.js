import express from 'express';
import adminLogin, { approveCommentById, deleteCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from '../controller/adminController.js';
import auth from '../middleware/auth.js';

const adminRouter = express.Router();

// Middleware to check if user is admin

adminRouter.post('/login', adminLogin);

adminRouter.get('/comments', auth, getAllComments);
adminRouter.get('/blogs', getAllBlogsAdmin);
adminRouter.post('/delete-comment', auth, deleteCommentById);
adminRouter.post('/approve-comment', auth, approveCommentById);
adminRouter.get('/dashboard', auth, getDashboard);

export default adminRouter;