# review-feedback
An application designed to allow employees to submit feedback toward each other's performance review.

### Some assumptions made
* I am assuming that the admin will want to assign multiple employees to review one person. Therefore, the admin can assign multiple people to review a certain employee then, the admin can see everyone's feedback.

* The admin may want delete reviews so I am adding that feature as well.

* The Employees may not want to keep seeing reviews that they have submitted feedback on. So, if time allows, then I would like to delete the reviews from the employee's view once they have submitted feedback.

* Since we are assigning reviewers and not letting every employee view every other employee's reviews, I take it there needs to be at least a little bit of privacy. So the employees will have to submit their IDs in order to view their reviews. This should provide a simple form of security for the employees.


## Demo
You may view the application as is on heroku by clicking [here](https://employee-reviewer-plus.herokuapp.com/).

## What it should look like

### Employee View

Employees should be able to see a list of personal reviews needing feedback. They should then be able to provide the feedback. The employees will also be able to see reviews that they have been assigned to provide feedback on. Likewise, they will then be able to provide said feedback.

### Admin View

An admin should be able to view as well as add, update and remove any and all employees. Admin should also be able to view, add and update reviews.
Lastly, an admin should be able to assign one employee to participate in another employee's review.

## Technologies Used:

This is a full-stack, MERN application. Most of the technologies will be limited to JavaScript, MongoDB (with Mongoose), React, NodeJS and Heroku for deployment, using the mLabs extension for cloud DB.

The front end utilizes Bootstrap for easy styling and the navbar is a component from material-ui that I pulled for this application.

### The API

This application is utilizing a MVC architectural pattern. You can view the flowchart below for details on the routes.

![API Flowchart](https://user-images.githubusercontent.com/37916145/49304655-a2e32d80-f492-11e8-8bdf-65da03549070.PNG)

## Running Locally

1. First, clone the application, CD into the application folder and run yarn install. (Just copy the below lines into your terminal).
```
git clone git@github.com:corey-mitchell/review-feedback.git
cd review-feedback
yarn install
```

2. Then you will need to either, create a local Mongo Database named, 'reviews' or you may create a database of your choosing and replace line 21 in the server.js folder with the line below. (Replacing the placeholder with the name of your personal database).
```
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/[your database name here]";
```

3. Once yarn is finished downloading all of your dependencies, and you have set up your Mongo database, run the line below in your terminal.
```
yarn start
```
*Note* - Concurrently should start your api then start your dev server. It may take a moment, but there is no need to open your browser, the application will start automatically once it is finished loading.

## Author

[**Corey Mitchell**](https://github.com/corey-mitchell)
