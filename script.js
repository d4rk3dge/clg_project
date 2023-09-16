const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'navbar-app', 'index.html'));
});

// Handle all other routes with a 404 error
app.all('*', (req, res) => {
  res.status(404).send('Resource not found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
