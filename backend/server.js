const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connect ho gaya! ✅'))
  .catch((err) => console.log('MongoDB error:', err));

// Test route
app.get('/', (req, res) => {
  res.send('Aysha Store Backend is Running! 🛒');
});

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server chal raha hai port ${PORT} pe! 🚀`);
});