# contact-manager
Quick Setup With Mongo and Mongoose and using Express 4 to create a RESTful Endpoint

This a quick workthrough of how you might setup a RESTful web api with Node Express Application.
Other items to note are as follows:
  1. Express is used to create routing for our RESTful api
  2. The routes have been abstracted out of the app.js file and placed in their own folder
  3. Mongoose is used to interface with my sandbox cloud configuration of Mongo
  4. When running locally you can expose the api at http://localhost:3000

Used the following as a reference guide to build standard Angular 2 app with webkit:
https://angular.io/docs/ts/latest/guide/webpack.html

The front end is a standard build of the angular 2 with the following presetup:
  1. Dev, Prod, and Test versions of the webconfig to streamline different processes
  2. Karma and jasmine pre-setup to work the webpack.test configuration
  3. When running locally you can see the UI at http://localhost:8080

CHORES:
 1. Add update UI to show contact-manager UX
 2. Update webpack to build LESS/SASS (based on how I am feeling that day)
 3. Add Gulp process building, cleaning, packaging, and deploying webpack project