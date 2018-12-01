// Import dependencies
import React from 'react';

// Import Components
import Main from '../Main';
import EmployeeReview from '../EmployeeReview';

// Create styles
const styles = {
    inputBar: {
        margin: "auto", 
        width: "75%", 
        border: 0, 
        outline: 0, 
        background: "transparent", 
        borderBottom: "1px solid black"
    },
    button: {
        margin: 30
    },
    errorMessage: {
        color: 'red',
        fontSize: 13,
        textAlign: 'right',
        paddingTop: 10
    }
};

// Create Employee Component
class EmployeePage extends React.Component {
    // Create State
    state = {
        employee: {},
        errorMessage: ''
    };

    // Function for finding user
    findEmployee = (event) => {
        // Prevent submit's default action of page load
        event.preventDefault();

        // Target Input value
        const inputValue = document.getElementById('employeeIDInput').value;

        // Fetch request for employee information
        fetch(`/api/employee/${inputValue}`)
            .then(res => res.json())
            .then(employeeData => {
                // If data comes back with a CastError, send error message to client
                if(employeeData.name === 'CastError') {
                    this.setState({errorMessage: 'Incorrect ID'});
                } else {
                    // Else set state 'employee' to employeeData
                    this.setState({employee: employeeData});
                };
            })
    };

    // Function for determining if an object is empty. I found this on stack overflow.
    isEmpty = (obj) => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    // Render Component
    render() {
        // If this.state.employee has no value, then render div asking for employee ID...
        if(this.isEmpty(this.state.employee)) {
            return (
                // Creates a card body
                <div className="card card-body mx-auto my-5 text-center">
                    <h1>Please enter your Employee ID</h1>
                    <br /><br />
                    <form onSubmit={this.findEmployee} className='row'>
                        <input id="employeeIDInput" className="col-8" placeholder="Employee ID" style={styles.inputBar}/>
                        <button className="btn btn-primary col-2" type="Submit" style={styles.button}>Submit</button>
                    </form>
                    <div style={styles.errorMessage}>{this.state.errorMessage}</div>
                </div>
            );
        } else {
            // Else render employee's page
            return (
                // Creates card body
                <div className="card card-body mx-auto my-5 text-center">
                    <h1>Hello {this.state.employee.name}</h1>

                    <br /><br />

                    <h3>Your Reviews</h3>

                    {/* Component for housing employee's reviews */}
                    <Main>
                        {/* Maps thru the 'employees' state and returns an Employee component */}
                        {this.state.employee.personalReviews.map(reviewID => {
                            return <EmployeeReview  key={reviewID} id={reviewID} />
                        })}
                    </Main>
                    
                </div>
            );
        }
    };
};

// Export Component
export default EmployeePage;