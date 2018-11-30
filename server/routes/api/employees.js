// Require Express Router
const router = require('express').Router();

// Require Controller
const controller = require('../../controllers/employeeController');

// Set Routes

// Route "/api/employee/all", for getting all employees
router.route('/all')
    // GET request to controller
    .get(controller.getEmployees);

// Route "/api/employee/create", for creating new employee
router.route('/create')
    // Send POST request to controller
    .post(controller.createEmployee);

// Route "/api/employee/:id", for any action to specific user
router.route('/:id')
    // Send PUT request to controller, to update user
    .put(controller.updateEmployee)
    // Send DELETE request to controller, to delete user
    .delete(controller.deleteEmployee);

// Exports Router
module.exports = router;