// ================================================
// Just wanted to note that this was my second attempt
//  The first attempt was separating every function
//  into its own module and connecting them all into one
//  and then only calling that one in the app.js file.
//  Please form a line to see that monstrosity.
//=================================================
//  This was based around the lecture notes
//    Shout out to Keri, Kim, and Corey
//  for helping me with questions and great ideas!!!
// ================================================
var express = require('express');
var router = express.Router();

var songs = []; //this was moved from the app.js file


//step one was swapping the 'app' to 'router'
router.post('/', function(req, res) {
    var song = req.body;
    //step two was declaring boolean variables to check everything with
    var duplicateCheck = false;
    var blankCheck = false;
    var dateApply = Date();

    for (var i = 0; i < songs.length; i++) {
        if (song.title == songs[i].title && song.artist == songs[i].artist) {
            duplicateCheck = true;
            //find way to alert
        };
    };

    if (song.title == '' || song.artist == '') {
        blankCheck = true;
        //find way to alert
    };

    if (duplicateCheck == true || blankCheck == true) {
        //find way to alert
    } else {
        song.date = dateApply
        console.log(song.date);
        songs.push(song);
        console.log(song);
    };

    res.sendStatus(200);
});

router.get('/', function(req, res) {
    res.send(songs);
});

module.exports = router;
