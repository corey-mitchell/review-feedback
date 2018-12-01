// Import dependencies
import React from 'react';

// Create Employee Component
class Employee extends React.Component {
    // Render Component
    render() {
        return (
            // Creates a card body
            <div className="card card-body mx-auto my-5 text-center">
                <h1>Personal Reviews</h1>

                <h1>Assigned Reviews</h1>
            </div>
        );
    };
};

// Export Component
export default Employee;