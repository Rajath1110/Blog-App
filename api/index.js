import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 50000 })
  .then(() => {
    console.log('Database connected');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.use((err ,req,res ,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'internal server error';
  res.status(statusCode).json({
    success : false,
    message,
  statusCode  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
