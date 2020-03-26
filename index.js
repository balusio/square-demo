/* eslint-disable */

const express = require('express');
const app = express();
const port = 8080;
app.use(express.static(__dirname + '/public'));
app.get('/', function(req,res){
  res.sendFile('index.html');
} )

app.listen(port, () => console.log(`Simple Server for a bunch of squares 
  \nrunning on port ${port} 
  \nBalu was here :D`)
)
