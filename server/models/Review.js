// Require Mongoose
const mongoose = require('mongoose');

// Save a reference to the mongoose schema constructor
const Schema = mongoose.Schema

// Create new Review schema
const ReviewSchema = new Schema ({
    // Employee that the review is assigned to
    employee: {
        type: Schema.Types.ObjectId,
        ref: "Employee"
    },

    // Review Description
    description: {
        type: String,
        required: true
    },

    // String for Employee Feedback 
    employeeFeedback: {
        type: String
    },

    // Array of Strings for Reviewer Feedback
    reviewerFeedback: [
        {
            type: String
        }
    ],

    // Boolean to determine if the employee has submitted feedback
    // This may not be used yet, but at a later point it could be used to grey out or move the reviews to other locations(whatever a customer may want)
    isReviewed: {
        type: Boolean,
        default: false
    }
});

// Create Model from the above schema
const Review = mongoose.model('Review', ReviewSchema);

// Export Review model
module.exports = Review;