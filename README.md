## Project Title

Intive-FDV Project

## Synopsis

Challenge project for software company Intive-FDV, this project was about adding a person through a form and greeting them with the entered data, and also list with all the previous users.

### Installing

* First: Clone project using this command through the terminal: git clone https://github.com/eddyriv3ra/intive.git
* Second: npm install in the project's root to install server dependencies
* Third: npm run client-install in the project's root to install client dependencies
* Four: You need nodemon installed as a dev dependency to execute the project locally, if you don't have nodemon execute this command in the projects's root using the terminal npm install nodemom -dev
* Fifth: Start App by using the command npm run dev

## Running the tests

No automated tests in the proyect

## API Reference

* POST: api/users to insert users, required fields: name, country and age
* GET: api/users gets a list of all the previous registered users
* GET: api/users/:id gets one user through its id
* GET: https://restcountries.eu/rest/v2/all it gets an array with a list of countries

## Built With

* Node.js - Back-End
* React - Front
* Bootstrap 4
* MongoDB
* Mongoose

## Version

  1.0.0

## Authors

* Eddy Rivera

