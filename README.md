SmallTales
==========

A small web application written with the MEAN stack (MongoDB, Express.js, Angular.js, Node.js) that allows people to collaboratively and anonymously create short fiction.

bll
---------

Contains the business logic layer for the server-side portion of the site. Mostly made up of Node.js modules that query MongoDB via Mongoose.js.

client
---------

Contains the client-side Angular.js app. Further broken up to separate views, controllers, directives and filters.

models
---------

Contains the Mongoose.js models that define what is stored in MongoDB.

routes
---------

Defines the routes for the REST API using Express.js to link HTTP requests to their corresponding actions on the server.
