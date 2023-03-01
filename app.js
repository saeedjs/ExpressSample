const express = require("express");
const app = express();

const mongoose = require("mongoose");
const debug = require("debug")("app:main");
const config = require("config");

const router = require("./src/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
  .connect(config.get("db.address"))
  .then(() => {
    debug("connected to mongodb");
  })
  .catch((err) => {
    debug("could not connect");
  });

const port = process.env.port || 4000;

app.use("/api", router);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
