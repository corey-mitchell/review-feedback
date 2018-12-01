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
class Review extends React.Component {
    // Creating state
    state = {
        review: {},
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

    // On component mount, get review body
    componentWillMount() {
        this.getReview()
    };

    // Function for getting review body from db
    getReview = () => {
        // Fetch request for review body
        fetch(`/api/review/${this.props.id}`)
            .then(res => res.json())
            .then(reviewBody => {
                if(reviewBody) {
                    this.setState({review: reviewBody});
                } else {
                    this.setState({review: null});
                };
            });
    };

    // Function for updating review
    updateReview = (event) => {
       // Prevent default action of submit
       event.preventDefault();

       // Fetch request for updating review information
       fetch(`/api/review/${this.props.id}`, {
           method: "PUT",
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               description: document.getElementById('reviewDescriptionInput').value
           })
       })

       // Set state updating to false then display review with updated information
       this.setState({updating: false}, ()=>{this.props.setCurrentEmployee(this.props.employeeID)})
    };

    // Function for deleting review
    deleteReview = () => {
        // Fetch request for deleting review
        fetch(`/api/review/${this.props.employeeID}/${this.props.id}`, {
            method: 'DELETE'
        }).then(this.props.setCurrentEmployee(this.props.employeeID))
    };


    // Render Component
    render() {
        // If there are no reviews, return an empty div
        // ** This little chunk of code was added to prevent an error from occuring if the admin attempted to look at reviews that weren't there**
        // ** For a reason I didn't really take the time to look into yet, the code will break under certain circumstances without this code.**
        if(this.state.review === null) {
            return (
                <div></div>
            );
        };

        // **Code is set up for handling updating the review. You can successfully update if you uncomment out the button on line 104 and click it.**
        // **The reason I commented this code out, is because right now the DOM won't update with the server. I am moving on to try and get a basic user page before calling it quits.**

        // If state is NOT updating then display user information...
        if(!this.state.updating) {
            return (
                // Creates a row containing user information
                <div className="row mx-auto my-1 text-left">
                    <button className="btn btn-danger col-1" onClick={this.deleteReview}>Delete</button>
                    <p className="col-3">Description: {this.state.review.description}</p>
                    <div className="col-4">
                        {/* <button className="btn btn-primary" style={{marginRight: 10}} onClick={this.assginReview}>Assign</button> */}
                        {/* <button className="btn btn-success" onClick={this.isUpdatingTrue}>Update Review</button> */}
                    </div>
                </div>
            );
        } else {
        // ...else display input bar for updating user name
            return (
                // Creates a row containing Update user input bar
                <div className="row mx-auto my-1 text-left">
                    <button className="btn btn-danger col-1" onClick={this.isUpdatingFalse}>Cancel</button>
                    <form onSubmit={this.updateReview} className="col-7">
                        <div className="row">
                            <input id="reviewDescriptionInput" className="col-5" style={styles.inputBar} placeholder={this.state.review.description} />
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
export default Review;