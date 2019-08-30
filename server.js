//establish dependencies

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//create instannces of express
var app = express(); 
//set the listening port with default
var PORT = process.env.PORT || 3000; 
//create json converters
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//access routes created in other .js files
require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);


//confirm the port the app is listening to
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});