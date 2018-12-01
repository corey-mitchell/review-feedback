// Import Dependencies
import React from 'react';

// Create EmployeeReview Component
class EmployeeReview extends React.Component {
    // Create State
    state= {
        review: {}
    };

    // On Component mount, fetch review data
    componentWillMount() {
        // Fetch request for review data
        fetch(`/api/review/${this.props.id}`)
            .then(res => res.json())
            .then(review => {
                // Set state review equalt to data received from database
                this.setState({review: review})
            });
    };      

    // Render Component
    render() {
        // If this.state.review === null return a blank div
        if(this.state.review === null) {
            return (
                <div></div>
            )
        } else {
            // Else return review
            return (
                <div className="row">
                    <p className="col-2">Description:</p>
                    <p className="col-4">{this.state.review.description}</p>
                </div>
            )
        }
    };
};

// Export Component
export default EmployeeReview;