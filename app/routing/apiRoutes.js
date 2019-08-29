// Require dependencies
var http = require("http");
var fs = require("fs");
//var htmlRoutes=require("./htmlRoutes");
//const htmlRoutes = require("./htmlRoutes");

const express = require('express')
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })



// Sets up the Express App
// =============================================================
const app = express()
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//get dirname
//replace routing with public
//create a function to execute that

// function getDirName() {
//     var str = __dirname;
//     var result = str.replace("routing", "public");
//     return result;
// }
let data;
app.get('/api/friends', function (req, res) {
    data = req.body;
    res.send(data);

});


// app.get('/api/users', function (req, res) {
//     var user_id = req.param('id');
//     var token = req.param('token');
//     var geo = req.param('geo');

//     res.send(user_id + ' ' + token + ' ' + geo);
// });

function getDirName() {
    var str = __dirname;
    var result = str.replace("routing", "public");
    return result;
};

app.get('/', function (req, res) {
    res.sendFile(getDirName() + '/home.html');
});

app.get('/survey', function (req, res) {
    res.sendFile(getDirName() + '/survey.html');

}); 
// htmlRoutes.getDirName();
// htmlRoutes.home();
// htmlRoutes.survey();

app.get('/api/friends', function (req, res) {
    res.send(JSON.stringify(req.body));
});


app.post('/survey', urlencodedParser, function (req, res) {
    //res.send('welcome, ' + req.body);
    let data=req.body;
    console.log(JSON.stringify(data));
})
//     // Capture the url the request is made to
//     var path = req.url;


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

