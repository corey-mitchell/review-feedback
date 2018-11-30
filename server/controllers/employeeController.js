// Requiring DB
const db = require('../models');

// Export Methods
module.exports = {
    // Get All Employees Method
    getEmployees: (req, res) => {
        // Gather all Employees in DB
        db.Employee.find()
            // Then send Employees back to client
            .then(Employees => res.json(Employees))
            // If an error occurs, send the err to the client instead
            .catch(err=> res.status(422).json(err));
    }, 

    // Create Employee Method
    createEmployee: (req, res) => {
        // Create New Employee with Supplied 'Name' from req.body
        db.Employee.create(req.body)
            // Then send Employee back to client
            .then(Employee => res.json(Employee))
            // If an error occurs, send the err to the client instead
            .catch(err => res.status(422).json(err));
    },

    // Update Employee Method
    updateEmployee: (req, res) => {
        // Find Employee by ID and update name to req.body.name
        db.Employee.findOneAndUpdate({_id: req.params.id}, {$set: {name: req.body.name}}, {new: true})
            // Then send Updated Employee back to client
            .then(Employee => res.json(Employee))
            // If an error occurs, send the err to the client  instead
            .catch(err => res.status(422).json(err));
    },

    // Delete Employee Method
    deleteEmployee: (req, res) => {
        // Deletes Specific Employee based upon unique ID
        db.Employee.deleteOne({_id: req.params.id})
            // Then send response back to client
            .then(response => res.json(response))
            // If an error occurs, send the err to the client instead
            .catch(err => res.status(422).json(err));
    }
};