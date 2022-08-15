//Require express to start using it.
const express = require('express');
const app = express();
app.get ('/', (req, res) => {
    console.log('We did it!')
    res.send('PAGE CONTENT');
})

app.listen(3000)