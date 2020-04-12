const express = require('express');
const app = express();
const server = require('http').Server(app);

server.listen(process.env.PORT || 80);
// WARNING: app.listen(80) will NOT work here!


//Sends the 'dist' folder to server
app.use('/', express.static(__dirname + '/dist'));

app.get('/', (req, res)=>  {
    res.sendFile(__dirname + '/dist/index.html');
  });
