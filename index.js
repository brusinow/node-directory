var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'app')));

app.get("/directory", function(req, res){
var thisPath = req.query.current;
var prevPath = req.query.prev;
// var thisResult = [];
// var prevResult = [];
fs.readdir(thisPath, (err, theseFiles) => {
  if (theseFiles && theseFiles.length > 0){
    theseFiles.forEach(thisFile => {
    console.log(thisFile);
    }); 
  }
  fs.readdir(prevPath.toString(), (err, prevFiles) => {

    if (prevFiles && prevFiles.length > 0){
      prevFiles.forEach(prevFile => {
        console.log(prevFile)
      })
       res.send({
    current: theseFiles,
    prev: prevFiles
    })
    }
    
  })
})
});




app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(3000);
