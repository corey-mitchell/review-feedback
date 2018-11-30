// Require Mongoose
const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Create a new Employee Schema
const EmployeeSchema = new Schema({
    // Employee Name
    name: {
        type: String,
        required: true
    },

    // Reviews for this specific employee
    personalReviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],

    // Reviews for other employees that this employee is assigned to
    otherEmployeeReviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

// Creates model from the above Schema
const Employee = mongoose.model("Employee", EmployeeSchema);

// Export the Employee model
module.exports = Employee;