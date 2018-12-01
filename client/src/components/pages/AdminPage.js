// Import dependencies
import React from 'react';

// Import Components
import Main from '../Main';
import Employee from '../Employee';

// Create Admin Component
class AdminPage extends React.Component {
    // Creating State
    state = {
        employees: []
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
    }

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
                        return <Employee key={employee._id} name={employee.name} id={employee._id} getEmployees={this.getAllEmployees}/>
                    })}
                </Main>
            </div>
        );
    };
};

// Export Component
export default AdminPage;