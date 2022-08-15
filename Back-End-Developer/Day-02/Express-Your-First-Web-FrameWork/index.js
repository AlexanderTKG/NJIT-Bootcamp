//Require needed module.
const express = require('express');

// initialize the app object.
const app = express();

//Create a homepage route.
app.get('/', function (req, res) {
    //This gets sent to the client
    // (your web browser most likely!)
    res.send('Hello World')
})


//Create a second route.
app.get('/second', function (req, res) {
    res.send('My second page')
});


//Listen for connections.
app.listen(3000, function () {
    console.log('Server running at http://localhost:3000')
});