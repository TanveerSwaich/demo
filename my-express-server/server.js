

const express = require("express");

const app = express();

app.get("/", function(req, res) {
  res.sendFile("");
});

app.listen(3000);
