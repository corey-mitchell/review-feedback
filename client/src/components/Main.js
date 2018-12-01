// This is a component for housing other components
// Import dependencies
import React from 'react';

// Create component
const Main = (props) => (
    <div className="container text-center">
        {props.children}
    </div>
);

// Export Component
export default Main;