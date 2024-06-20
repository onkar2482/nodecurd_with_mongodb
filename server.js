const express = require("express");
const app = express();
const db = require('./db');
const router = require('./empolyeeroute'); // Adjust path as per your project structure

// Mounting the router for employee routes under '/employee'
app.use('/employee', router);

// Route handler for the root endpoint
app.get('/', (req, res) => {
    res.send("Welcome");
});

// Starting the server on port 8000
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
