// Require Mongoose
const mongoose = require('mongoose');

// Save a reference to the mongoose schema constructor
const Schema = mongoose.schema

// Create new Review schema
const ReviewSchema = new Schema ({
    employee: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviewer: {
        type: Schema.Types.name,
        ref: 'Employee'
    }
});

// Create Model from the above schema
const Review = mongoose.model('Review', ReviewSchema);

// Export Review model
module.exports = Review;