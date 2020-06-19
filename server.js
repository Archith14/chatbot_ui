var express= require('express');
var cors = require('cors');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'static')));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');	
 });

 
const server = require('http').createServer(app);
const PORT = process.env.PORT || 3000;
server.listen(PORT);
console.log("Server is running on port "+PORT);