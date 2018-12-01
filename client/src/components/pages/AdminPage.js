// Import dependencies
import React from 'react';

// Import Components
import Main from '../Main';
import Employee from '../Employee';
import ReviewsPage from './ReviewsPage';

// Create styles
const styles = {
    inputBar: {
        margin: "auto", 
        width: "75%", 
        border: 0, 
        outline: 0, 
        background: "transparent", 
        borderBottom: "1px solid black"
    }
};

// Create Admin Component
class AdminPage extends React.Component {
    // Creating State
    state = {
        employees: [],
        currentEmployee: {}
    };

    // When the component mounts, get all employees
    componentWillMount() {
        this.getAllEmployees();
    };

    // Function for getting all employee IDs and setting them to the 'employees' state
    getAllEmployees = () => {
        // Fetching all employees
        fetch(`/api/employee/all`)
            .then(res => res.json())
            // Set employees state to server response
            .then(Employees => {
                this.setState({employees: Employees});
            });
    };

    // Function for creating a new employee
    createEmployee = (event) => {
        // Prevent default action of page reload
        event.preventDefault();

        // Fetch request to create new employee
        fetch(`/api/employee/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: document.getElementById('newEmployeeInput').value
            })
        }).then(()=>{
            // Then get updated employees and reset the form
            this.getAllEmployees();
            document.getElementById('newEmployeeForm').reset();
        });
    };

    // Function for setting currentEmployee state
    setCurrentEmployee = (id) => {
        fetch(`/api/employee/${id}`).then(res => res.json()).then(employee => {
            this.setState({currentEmployee: employee})
        })
    };

    // Render Component
    render() {
        return (
            // Creates a card body
            <div className="card card-body mx-auto my-5 text-center">
                <h1>Your Employees</h1>

                {/* Component for housing Employees' data*/}
                <Main>
                    {/* Maps thru the 'employees' state and returns an Employee component */}
                    {this.state.employees.map(employee => {
                        return <Employee 
                            key={employee._id} 
                            name={employee.name} 
                            id={employee._id} 
                            getEmployees={this.getAllEmployees} 
                            setCurrentEmployee={this.setCurrentEmployee}
                        />
                    })}
                </Main>

                {/* For for Creating New Employee */}
                <form id="newEmployeeForm" className="row" onSubmit={this.createEmployee}>
                    <div className="col-6">
                        <input id="newEmployeeInput" placeholder="Enter New Employee Name Here" style={styles.inputBar}/>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-primary" type="Submit">Add Employee</button>
                    </div>
                </form>

                <ReviewsPage employee={this.state.currentEmployee} setCurrentEmployee={this.setCurrentEmployee} />
            </div>
        );
    };
};

// Export Component
export default AdminPage;