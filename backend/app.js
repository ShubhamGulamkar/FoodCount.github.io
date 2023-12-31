const express = require("express");
const mongoose = require("mongoose");
const loginRoute = require("./routes/login-route");

const app = express();
var cors = require("cors");

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type , Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/api/users/", loginRoute);

mongoose
  .connect(
    "mongodb+srv://projectgroup:qwerty1234@cluster0.0gjckbx.mongodb.net/resident?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(" Database Connected and Server started on port no 5000");
    app.listen(5000);
    //console.log("Server started on port no 5000")
  })
  .catch((err) => {
    console.log(err);
  });
