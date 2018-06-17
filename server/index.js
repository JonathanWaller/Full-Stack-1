require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const axios = require("axios");

const ctrl = require("./controller.js");

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  //   console.log(dbInstance);
  return app.set("db", dbInstance);
});

app.get("/api/items", ctrl.getProducts);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Howdy, listening at port: ${port}`));
