//establish dependencies

var express = require('express');
var bodyParser = require('body-parser');
//var path = require('path');
//const friends = require("./app/data/friends");
//console.log(friends.getFriendsArray());

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
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});