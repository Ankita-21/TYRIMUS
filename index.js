const express = require("express");
const app = express();
const mongoose = require('mongoose');
const path = require("path");
const connectDB = require("./config/db");
const bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, "public")));
connectDB();

app.use(bodyParser.urlencoded({ extended: false }))
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

app.get("/dashboard", (req, res) => {
  res.sendFile(__dirname + "/public/dashboard.html");
});
// app.post("/projects", (req, res) => {
//   let { name, description, link } = req.body;
//   res.sendFile(__dirname + "/public/projects.html");
// })

app.listen("3000", console.log("Listening on port 3000."));