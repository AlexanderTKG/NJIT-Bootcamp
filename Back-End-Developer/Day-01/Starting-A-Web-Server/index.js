let http = require('http');

let server = http.createServer(function(req, res) {
    //This callback handles each incoming request.

    //This sends the data:
    res.write('<h1>Hello,FSD!</h1>');

    //This closes the connection:
    res.end();
})

server.listen(3000, function (req, res) {
    console.log('Server running at http://localhost:3000');
}) // 3000 is a port number