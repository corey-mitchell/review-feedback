// Import dependencies
import React from 'react';

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

// Create Employee Component
class Employee extends React.Component {
    // Create state
    state = {
        updating: false
    };

    // Function for changing 'updating' state to true
    isUpdatingTrue = () => {
        this.setState({updating: true})
    };

    // Function for changing 'updating' state to false
    isUpdatingFalse = () => {
        this.setState({updating: false})
    };

    // Function for updating employee name
    updateEmployee = (event) => {
        // Prevent default action of submit
        event.preventDefault();

        // Fetch request for updating user information
        fetch(`/api/employee/${this.props.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: document.getElementById('employeeNameInput').value
            })
        })

        // Set state updating to false then displays employees with updated information
        this.setState({updating: false}, ()=>{this.props.getEmployees()})
    };

    // Function for deleting employee
    deleteEmployee = () => {
        // Deletes user from database
        fetch(`/api/employee/${this.props.id}`, {
            method: 'DELETE'
            // Then refreshes the employees
        }).then(this.props.getEmployees())
    };

    // Function for opening reviews page
    openReviews = () => {
        this.props.setCurrentEmployee(this.props.id)
    };

    // Render Component
    render() {
        // If state is NOT updating then display user information...
        if(!this.state.updating) {
            return (
                // Creates a row containing user information
                <div className="row mx-auto my-1 text-left">
                    <button className="btn btn-danger col-1" onClick={this.deleteEmployee}>Delete</button>
                    <p className="col-4">ID: {this.props.id}</p>
                    <p className="col-3">Name: {this.props.name}</p>
                    <div className="col-4">
                        <button className="btn btn-primary" style={{marginRight: 10}} onClick={this.openReviews}>Review</button>
                        <button className="btn btn-success" onClick={this.isUpdatingTrue}>Update Info</button>
                    </div>
                </div>
            );
        } else {
        // ...else display input bar for updating user name
            return (
                // Creates a row containing Update user input bar
                <div className="row mx-auto my-1 text-left">
                    <button className="btn btn-danger col-1" onClick={this.isUpdatingFalse}>Cancel</button>
                    <p className="col-4">ID: {this.props.id}</p>
                    <form onSubmit={this.updateEmployee} className="col-7">
                        <div className="row">
                            <input id="employeeNameInput" className="col-5" style={styles.inputBar} placeholder={this.props.name} />
                            <div className="col-7">
                                <button className="btn btn-primary" type="Submit">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            );
        }
    };
};

// Export Component
export default Employee;