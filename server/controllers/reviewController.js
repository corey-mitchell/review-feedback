// Requiring DB
const db = require('../models');

// Export Methods
module.exports = {
    // Method for trading review id from employee for review body to display to client
    getReviewBody: (req, res) => {
        // Targets Review with ID equal to req.params.id
        db.Review.findOne({_id: req.params.id})
            // If we successfully find a review, send it to the client.
            .then(review => res.json(review))
            // Else if and error occurs, send the err to the client
            .catch(err => res.status(422).json(err));
    },

    // Create Review Method
    createReview: (req, res) => {
        // Create new review with information from req.body
        db.Review.create(req.body)
            // If a review was created successfully, find User with id equal to req.params.id
            .then((newReview) => {
                // Update the Employee's personal reviews with the new review
                return db.Employee.findOneAndUpdate({_id: req.params.id}, { $push: {personalReviews: newReview._id}}, { safe: true, upsert: true, new: true })
            })
            // If we were able to successfully update the employee, then send the updated employee information back to the client
            .then(employee => res.json(employee))
            // Else if an error occured, send it to the client
            .catch(err => res.status(422).json(err));
    },

    // Update Review Method
    updateReview: (req, res) => {
        // Find specific review with ID equal to req.params.id then update the description with req.body.descriptions
        db.Review.findOneAndUpdate({_id: req.params.id}, { $set: {description: req.body.description}}, {new: true})
            // Then if review was successfully updated, send updated review back to client
            .then(review => res.json(review))
            // Else if an error occurs, send the error to the client
            .catch(err => res.status(422).json(err));
    },

    // Delete Review Method
    deleteReview: (req, res) => {
        // Delete review that has ID equal to req.params.id
        db.Review.deleteOne({_id: req.params.id})
        // Then send response back to client
        .then(response => res.json(response))
        // If an error occurs, send error back to client
        .catch(err => res.status(422).json(err));
    }
};