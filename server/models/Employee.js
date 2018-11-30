// Require Mongoose
const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Create a new Employee Schema
const EmployeeSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

// Creates model from the above Schema
const Employee = mongoose.model("Employee", EmployeeSchema);

// Export the Employee model
module.exports = Employee;