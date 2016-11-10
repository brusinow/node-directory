var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'app')));

app.get("/directory", function(req, res){
var thisPath = req.query.current;
var prevPath = req.query.prev;
var thisResult = [];
var prevResult = [];
fs.readdir(thisPath, (err, theseFiles) => {
  if (theseFiles && theseFiles.length > 0){
    theseFiles.forEach(thisFile => {
    thisResult.push(thisFile);
    }); 
  }
  fs.readdir(prevPath.toString(), (err, prevFiles) => {

    if (prevFiles && prevFiles.length > 0){
      prevFiles.forEach(prevFile => {
        prevResult.push(prevFile);
      })
       res.send({
    current: thisResult,
    prev: prevResult
    })
    }
    
  })
  
 
})
});




app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'app/index.html'));
});

app.listen(3001);
