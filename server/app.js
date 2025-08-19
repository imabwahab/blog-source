import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import adminRouter from './routers/adminRouter.js';
import blogRouter from './routers/blogRoutes.js';

const app = express();

await connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => {
  console.log('Received a request at /');
  res.send('Hello, World!');
});
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;