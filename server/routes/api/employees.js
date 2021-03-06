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

// Route "/api/employee/:id", for any action to specific employee
router.route('/:id')
    // Send GET request to controller, to get employee data
    .get(controller.getEmployee)

    // Send PUT request to controller, to update employee
    .put(controller.updateEmployee)

    // Send DELETE request to controller, to delete employee
    .delete(controller.deleteEmployee);

// Exports Router
module.exports = router;