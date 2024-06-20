const mongoose = require('mongoose');

// Define the schema
const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String, required: true },
    salary: { type: String, required: true }
});

// Create the model
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
