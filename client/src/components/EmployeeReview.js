// Import Dependencies
import React from 'react';

// Create EmployeeReview Component
class EmployeeReview extends React.Component {
    // Render Component
    render() {
        return (
            <div className="container text-center">
                <h4 className="col-4">Description:</h4>
                <p className="col-4">{this.props.description}</p>
            </div>
        )
    }
};

// Export Component
export default EmployeeReview;