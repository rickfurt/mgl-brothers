const express = require('express')
const app = express()
const port = 3000
var path = require('path');

express.static('public')
app.use(express.static('public'))

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(__dirname + '/public'));

var public = __dirname + '/public';

app.get("/", function (req, res) {
    res.sendFile(path.join(public, "/home.html"));
  });
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))