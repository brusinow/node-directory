var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');

app.get("/directory", function(req, res){
console.log(req.body);
// var result = [];
// fs.readdir(thisPath, (err, files) => {
//   files.forEach(file => {
//         console.log(file);
//     result.push(file);
//   });
// console.log(result);
// res.render("index",{result: result});
// })
});


app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(3001);
