const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const listRoutes = require('./project/routes/lists');
const itemRoutes = require('./project/routes/items');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/lists', listRoutes);
app.use('/items', itemRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
