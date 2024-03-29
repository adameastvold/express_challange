var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var songs = require('./routes/songs');

// var songs = []; //ended up moving this into new routing module

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({
    extended: true
}));
/**
 * POST /songs
 *
 * Places song into songs array
 */

app.use('/songs', songs);

//==================MOVED TO MODULE==================
// app.post('/songs', function(req, res) {
//     var song = req.body;
//     songs.push(song);
//     res.sendStatus(200);
// });
//
// app.get('/songs', function(req, res) {
//     res.send(songs);
// });
//===================================================
app.get('/*', function(req, res) {
    var file = req.params[0] || '/views/index.html';

    console.log('What is in req.params[0]?', req.params[0]);

    //console.log('dirname: ', __dirname);
    //console.log('path', path.join(__dirname, '../public', file));
    res.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get('port'), function() {
    console.log('Server now running at port ', app.get('port'));
});
