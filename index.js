const express = require("express");
const app = express();
const mongo = require("mongo");
const hbs = require("hbs");
const parser = require("body-parser");
const passport = require("passport");
const cookie = require("cookie-parser");
const bcrypt = require("bcrypt");

app.set("view-engine", "hbs");
app.use(parser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("Funciona!");
});
