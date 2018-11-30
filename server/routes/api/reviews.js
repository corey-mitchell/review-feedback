// Require Express Router
const router = require('express').Router();

// Require Controller
const controller = require('../../controllers/reviewController');

// Set Routes

// It is important to note here that the ':id' parameter is a placeholder for the Review ID for every request except for the POST request.
// The POST request requires the Employee ID, not the Review ID

// Route "/api/review/:id"
router.route('/:id')
    // POST request to the controller to create a review of specific employee
    .post(controller.createReview)

    // GET request to the controller to trade review ID for review body for client
    .get(controller.getReviewBody)

    // PUT request to the controller to update specific review
    .put(controller.updateReview)

    // DELETE request to the controller to delete specific review
    .delete(controller.deleteReview);


// Export Router
module.exports = router;