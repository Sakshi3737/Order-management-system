import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import orderRoutes from './routers/orderRoutes.js';
import authRoutes from './routes/authRoutes.js'; 
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

dotenv.config(); 
const app = express(); 
app.use(cors()); 
app.use(express.json()); 
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

mongoose.connect(process.env.MONGO_URI) 
  .then(() => console.log('MongoDB Connected')) 
  .catch(err => console.log(err));

app.use('/api/orders', orderRoutes); 
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(Server running on port ${PORT}));
