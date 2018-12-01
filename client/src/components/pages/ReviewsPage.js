// Import dependencies
import React from 'react';

// Import Components
import Main from '../Main';
import Review from '../Review';

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
class ReviewsPage extends React.Component {
    // Function for creating a review
    createReview = (event) => {
        // Prevent default submit action of page reload
        event.preventDefault();

        // Fetch request for creating review
        fetch(`/api/review/${this.props.employee._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                description: document.getElementById('newReviewInput').value
            })
        })
        // Run setCurrentUser to show changes to user reviews
        .then(this.props.setCurrentEmployee(this.props.employee._id))
        // Resets input after review is created
        .then(document.getElementById('newReviewForm').reset());
    };

    // Render Component
    render() {
        if(this.props.employee._id === undefined) {
            return (
                <div className="mx-auto my-5 text-center">
                    <h4>Click an Employee's 'Review' button to view and create reviews for them here.</h4>
                </div>
            )
        } else {
            return (
                // Creates a card body
                <div className="mx-auto my-5 text-center">
                    <h1>{this.props.employee.name}'s Reviews</h1>

                    {/* Component for housing Employees' data*/}
                    <Main>
                        {/* Maps thru this.props.employee.personalReviews and returns a Review component */}
                        {this.props.employee.personalReviews.map(reviewID => {
                            return <Review key={reviewID} id={reviewID} />
                        })}
                    </Main>

                    {/* For for Creating New Review */}
                    <form id="newReviewForm" className="row" onSubmit={this.createReview}>
                        <div className="col-6">
                            <input id="newReviewInput" placeholder="Enter New Review Here" style={styles.inputBar}/>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-primary" type="Submit">Add Review</button>
                        </div>
                    </form>
                </div>
            );
        }
    };
};

// Export Component
export default ReviewsPage;