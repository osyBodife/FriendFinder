// Require dependencies
// var http = require("http");
//var fs = require("fs"); 
// var request = require('request');

const express = require('express');
const path= express('path');
// const objpath=path.parse(__filename);
// console.log(objpath);
var bodyParser = require('body-parser');
// Sets up the Express App
// =============================================================
const app = express()
const PORT = process.env.PORT || 3000;



// module.exports = function (app) {


// function getDirName(){   
//     var str=__dirname;
//     var result = str.replace("routing","public");
//     return result;
// }
// app.get('/survey', function (req, res) {
//         res.sendFile(getDirName() + '/survey.html');

// }); 

// app.get('/', function (req, res) {    
//     res.sendFile(getDirName() + '/home.html');
// });


//get dirname
//replace routing with public
//create a function to execute that

function getDirName(){   
    var str=__dirname;
    var result = str.replace("routing","public");
    return result;
}
app.get('/survey', function (req, res) {
        res.sendFile(getDirName() + '/survey.html');

}); 

app.get('/', function (req, res) {    
    res.sendFile(getDirName() + '/home.html');
});

//to export the routes we put the created routes in module export module

module.exports = function (app) {

    function getDirName() {
        var str = __dirname;
        var result = str.replace("routing", "public");
        return result;
    }
    
        app.get('/', function (req, res) {
            res.sendFile(getDirName() + '/home.html');
        }); 
    
        app.get('/survey', function (req, res) {
            res.sendFile(getDirName() + '/survey.html');
        });
    } ;
    


// let data;
// let url ="https://friend-finder-fsf.herokuapp.com/api/friends";
// request(url, function (error, res, body) {
//     console.log('error:', error); // Print the error if one occurred
//     //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     //console.log('body:', body); // Print the HTML for the Google homepage.   
//     data = JSON.parse(body);
//     console.log(data);
//     //console.log(data[0].name);
//     //res.send(data);
    
// });


// app.get('/api/users', function (req, res) {
//     var user_id = req.param('id');
//     var token = req.param('token');
//     var geo = req.param('geo');

//     res.send(user_id + ' ' + token + ' ' + geo);
// });
//     // Capture the url the request is made to
//     var path = req.url;


// // Start our server so that it can begin listening to client requests.
// app.listen(PORT, function () {
//     // Log (server-side) when our server has started
//     console.log("Server listening on: http://localhost:" + PORT);
// });

