// Import dependencies
import React from 'react';

// Create Custom styles
const styles = {
    button: {
        margin: 20
    }
};

// Create Landing Component
// I call the component landing because this is the component the site initally loads with.
class Landing extends React.Component {
    // Render Component
    render() {
        return (
            <div className="card card-body mx-auto my-5">
                <div className="text-center rgba-stylish-strong py-5 px-4">
                    <div className="py-">
                
                        {/* Content */}
                        <h5 className="h5 orange-text">Employee Review App</h5>
                        <h2 className="card-title h1 my-4 py-2">Are you an Employee or an Admin?</h2>
                        <button className="btn btn-primary" style={styles.button}>Employee</button>
                        <button className="btn btn-success" style={styles.button}>Admin</button>
                
                    </div>
                </div>
            </div>
        );
    };
};

// Export Component
export default Landing;