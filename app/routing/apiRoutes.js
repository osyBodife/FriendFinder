// Require dependencies
//var http = require("http");
var fs = require("fs");
var request = require('request');
//import data from friends.js
const friends = require("./app/routing/friend");
console.log(friends.getFriendsArray());

//var htmlRoutes=require("./htmlRoutes");
//const htmlRoutes = require("./htmlRoutes");

const express = require('express');
const app = express();
var bodyParser = require('body-parser');


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser

var urlencodedParser = bodyParser.urlencoded({ extended: false });



// Sets up the Express App
// =============================================================

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing

//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

//load data from friends.js
var friends = require('../data/friends.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.get('/api/friends', function (req, res) {

    //getFriends();
    //console.log(data);
    res.send(JSON.stringify(data));
    let results = JSON.stringify(data);
    console.log(results);


});

//export the route
module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

}

function getDirName() {
    var str = __dirname;
    var result = str.replace("routing", "public");
    return result;
};



app.get('/survey', function (req, res) {
    res.sendFile(getDirName() + '/survey.html');

});

let userData;
app.post('/api/friends', urlencodedParser, (req, res) => {
    var userData =JSON.stringify(req.body);
    
    //console.log(userData);
    data = JSON.parse(userData);
    //console.log(data);
    console.log(data.score);
    //call the function that matches friends
    matchFriends();
    
});
//create a funtion that handles the logic
function matchFriends(){
    //convert the data.score to numbers
    //create a new array to hold the new scores
    let userScoreArray=[];

    for(var i=0; i<data.score.length; i++){
        userScoreArray.push(data.score.length[i]);      

    }
    console.log(userScoreArray);

}


//#var value = Math.abs(-1);
//Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

