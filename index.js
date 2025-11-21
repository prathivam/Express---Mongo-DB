const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("Hello World");
});

mongoose
  .connect(
    "mongodb+srv://prathisahrudh_db_user:oegj4QzHVcKRd3ZW@backendapi.gxgylra.mongodb.net/?appName=BackendAPI"
  )
  .then(() => {
      console.log("Connected to Database");
      app.listen(3000, () => {
        console.log("Server is running " + `http://localhost:3000`);
      });
  })
  .catch((err) => {
    console.log("Connection Failed");
  });
