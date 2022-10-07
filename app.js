const express = require("express");
const mongoose = require("mongoose");

//Express App
const app = express();

//Conecting mongoose
const dURI =
  "mongodb+srv://Freenine:Tuu2ShHdLsypDl3X@nextproject.qqkbxd5.mongodb.net/BlogDb?retryWrites=true&w=majority";
mongoose
  .connect(dURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) =>
    app.listen(port, () => console.log(`Connected to database at ${port}...`))
  )
  .catch((err) => console.log(err));
//Calling routes
app.use(express.json());
//app.use("/api/blogs", );

//Port configuration
const port = process.env.port || 3000;
