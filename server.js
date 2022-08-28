
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000;

const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://tanveersingh:TanuSwaich22!@cluster0.gk4bh.mongodb.net/Portfolio?retryWrites=true&w=majority", {useNewUrlParser: true});

let newItemList = ["Foo", "Bar", "Snack", "Munch"];

const infoSchema = {
  fName: String,
  lName: String,
  email: String
};

const todoItem = {
  title: String,
  description: String,
  date: String
};

const contactInfo = mongoose.model("contactInfo", infoSchema);

app.set("view engine", "ejs");

app.use(express.static("css"));

app.get("/", function(request, response) {
  response.render("review", {newItemList: newItemList});
});

app.post("/contact", function(request, response) {
  response.redirect("contact");
});

app.get("/contact", function(request, response) {
  response.render("contacts");
});

app.post("/todo", function(request, response) {
  response.redirect("todo");
});


app.get("/todo", function(request, response) {
  let date = new Date(Date.now());
  response.render("listMain", {
    title: "Some Task",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, quis nostrud exent in culpa qui officia deserunt mollit anim id est laborum.",
    date: date.toDateString()
  });
});

app.post("/signup", function(request, response) {
  if((request.body.fName !== "") && (request.body.lName !== "") && (request.body.email !== "")){
    let information = new contactInfo({
      fName: request.body.fName,
      lName: request.body.lName,
      email: request.body.email
    });

    information.save();
  }else {
    console.log("Please make sure all fields are entered");
  }
  response.redirect("/");
});


  app.listen(port, () => console.log('Server was started on port %d', port));
