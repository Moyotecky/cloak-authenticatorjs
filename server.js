const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const authMiddleware = require('./middleware/authMiddleware');
const errorMiddleware = require('./middleware/errorMiddleware');
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', authMiddleware, userRoutes);

// Error handling middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
