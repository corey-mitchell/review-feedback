# review-feedback
An application designed to allow employees to submit feedback toward each other's performance review.

## Demo
You may view the application as is on heroku by clicking [here]().

## What it should look like

### Employee View

Employees should be able to see a list of reviews needing feedback. They should then be able to provide the feed back.

### Admin View

An admin should be able to view as well as add, update and remove all employees. Admin should also be able to view, add and update reviews.
Lastly, an admin should be able to assign another employee to participate in another employee's review.

## Technologies Used:

This will be a full-stack, MERN application. Most of the technologies will be limited to MongoDB (with Mongoose), React, NodeJS and Heroku for deployment.

Should I use any additional techonologies, I will add them here.

### The API

This application is utilizing a MVC architectural pattern. You can view the flowchart below for details on the routes.

![API Flowchart](https://user-images.githubusercontent.com/37916145/49304655-a2e32d80-f492-11e8-8bdf-65da03549070.PNG)

## Running Locally

To run this application locally, you must first create a Mongo Database name 'reviews'.

Next, clone the application. Then CD into the application folder and run yarn install. (Just copy the below lines into your terminal)
```
git clone git@github.com:corey-mitchell/review-feedback.git
cd review-feedback
yarn install
```

Once yarn is finished downloading all of your dependencies, run:
```
yarn start
```
*Note* - Concurrently should start your api then start your dev server. It may take a moment, but there is no need to open your browser, the application will start automatically once it is finished loading.

## Author

[**Corey Mitchell**](https://github.com/corey-mitchell)
