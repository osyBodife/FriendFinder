// Require dependencies

const express = require('express');
const app = express();
var bodyParser = require('body-parser');

//import data from friends.js
const friends = require('./../data/friends.js');
//console.log(friends.getFriendsArray());

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

    //get the list of existing friends in db
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });


    //add new user from form input
    let userInput;
    //initialize total difference and declare other variables
    var totalDifference = 0;
    let a, b;
    let bestMatch = {};

    //create an empty to hold the new array after obtaining absolute values
    let combinedArray = [];
    //combined array would be sorted by totalDifference to get smallest  
    let new_combinedArray;
    app.post('/api/friends', urlencodedParser, (req, res) => {

        // save user input in a variable
        var userInput = req.body;
        //console.log(JSON.stringify(userInput));

        var userScoreArray = userInput.score;
        // console.log('userScoreArray);


        // declare matching variables

        var matchedImage;
        var matchedName;


        // loop thru existing friends in the list      
        for (var i = 0; i < friends.length; i++) {
            //console.log('existing friends : ' + JSON.stringify(friends[i]));        
           let db_scores=friends[i].score;
           //console.log(db_scores);
           //change element to numbers
           let dB_scoreArrays=db_scores.map(Number);
           console.log(dB_scoreArrays);
            //console.log(dB_scoreArrays[0][1]);
           //console.log("Test length :" + dB_scoreArrays[0].length)
           //get the size of inner array
           let rows=dB_scoreArrays.length
          // console.log("Test row" + rows);
           for(let n=0; n<rows; n++){
               let items=dB_scoreArrays[n];
              //onsole.log("items :" + items);

           
           //let innerArraylength=dB_scoreArrays.length;
           //console.log(innerArraylength)
                    
               

           
           //console.log(dB_scoreArrays);
          


            // get absolute value for corresponding qtns btw new user and existing friends
            var num_diff = 0;
            //or (var j = 0; j < innerArraylength; j++) {
                for (var j = 0; j < userScoreArray.length; j++) {
                num_diff = Math.abs(friends[i].score[i] - userScoreArray[j]);
                 //num_diff = Math.abs(dB_scoreArrays[i][j]- userScoreArray[j]);
                totalDifference += num_diff;
                //console.log('total_diff : ' + totalDifference);
                combinedArray.push({ "name": friends[i].name, "photo": friends[i].photo, "totalDifference": totalDifference });
                //console.log(combinedArray);


            }


        }
    }
    
        //console.log(combinedArray);   
        // console.log(combinedArray[0].totalDifference);  
        //create function to sort array of objects by total Difference
        function compare(a, b) {
            if (a.totalDifference < b.totalDifference) {
                return -1;
            }
            if (a.totalDifference > b.totalDifference) {
                return 1;
            }
            return 0;
        }
        // assigned the sorted array to new varaible
        new_combinedArray = combinedArray.sort(compare);
        //when the combinedArray is sorted in DESC
        //the first element in new_combinedArray becomes the matching friend
        // console.log(new_combinedArray[0]);
        matchedName = new_combinedArray[0].name;
        matchedImage = new_combinedArray[0].photo;
        //console.log("Matched image is: "+ matchedImage);  
        bestMatch = new_combinedArray[0];
        console.log(bestMatch);


        // Put new friend from survey in "database" array
        friends.push(userInput);

        // return the best match friend
        res.send(bestMatch);

    });


}

// var objs = [
//     { first_nom: 'Lazslo', last_nom: 'Jamf' },
//     { first_nom: 'Pig', last_nom: 'Bodine' },
//     { first_nom: 'Pirate', last_nom: 'Prentice' }
// ];
// function compare(a, b) {
//     if (a.last_nom < b.last_nom) {
//         return -1;
//     }
//     if (a.last_nom > b.last_nom) {
//         return 1;
//     }
//     return 0;
// }

// objs.sort(compare);

// new_obj = objs.sort(compare);
// console.log(new_obj);


// function getDirName() {
//     var str = __dirname;
//     var result = str.replace("routing", "public");
//     return result;
// };



// app.get('/survey', function (req, res) {
//     res.sendFile(getDirName() + '/survey.html');

// });

// let userData;
// app.post('/api/friends', urlencodedParser, (req, res) => {
//     var userData = JSON.stringify(req.body);

//     //console.log(userData);
//     data = JSON.parse(userData);
//     //console.log(data);
//     console.log(data.score);
//     //call the function that matches friends
//     matchFriends();

// });


//#var value = Math.abs(-1);
//Start our server so that it can begin listening to client requests.
// app.listen(PORT, function () {
//     // Log (server-side) when our server has started
//     console.log("Server listening on: http://localhost:" + PORT);
// });

