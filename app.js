const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/DressStore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define routes and controllers for your Dress Store application
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application.' });
});

// Add more routes and controllers for products and categories.

app.listen(port, () => {
  console.log(`Dress Store app is running on port ${port}`);
});