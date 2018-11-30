// Require Express Router
const router = require("express").Router();

// Require Routes here.
const employeeRoutes = require('./employees');
const reviewRoutes = require('./reviews');

// Use Routes
// Employee Routes
router.use("/employee", employeeRoutes);

// Review Routes
router.use("/review", reviewRoutes);

// Export Router
module.exports = router;
