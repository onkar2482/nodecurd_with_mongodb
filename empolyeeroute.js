const express = require('express');
const bodyParser = require('body-parser');
const Employee = require('./empolyee'); // Adjust path as per your project structure
const router = express.Router();

router.use(bodyParser.json());

// GET all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST a new employee
router.post('/', async (req, res) => {
    try {
        const { name, role, salary } = req.body;
        const newEmployee = new Employee({ name, role, salary });
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PUT update an employee by ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, role, salary } = req.body;
        const updatedEmployee = await Employee.findByIdAndUpdate(
            id,
            { name, role, salary },
            { new: true, runValidators: true }
        );
        if (!updatedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE an employee by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        if (!deletedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json(deletedEmployee);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
