import express from 'express';
import adminLogin from '../controller/adminController.js';

const adminRouter = express.Router();

// Middleware to check if user is admin

adminRouter.post('/login', adminLogin);

export default adminRouter;