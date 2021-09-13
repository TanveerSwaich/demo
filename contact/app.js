const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");


const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response) {
  response.sendFile(__dirname + "/contact.html");
});

app.post("/", function(request, response) {
  var firstName = request.body.fName;
  var lastName = request.body.lName;
  var email = request.body.email;

  console.log(firstName, lastName, email);
});

app.listen("3000", function() {
  console.log("Local server was started");
});


// API key
// e9ae8aa9fb3d4386a7849c966a0c5f72-us5
