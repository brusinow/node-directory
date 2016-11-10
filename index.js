var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'app')));

app.get("/directory", function(req, res){
console.log(req.query.path);
var thisPath = req.query.path;
console.log("current directory: ",thisPath);
var result = [];
fs.readdir(thisPath, (err, files) => {
  if (files && files.length > 0){
  files.forEach(file => {
    result.push(file);
  }); 
res.send(result);
  }
  if (err){
    res.send(err);
  }
})
});


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(3001);
