import express from 'express';
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';

const app = express();

await connectDB();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// route to handle the root path
app.get('/', (req, res) => {
  console.log('Received a request at /');
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;