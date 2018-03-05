const express = require("express");
const app = express();
const mongo = require("mongo");
const hbs = require("hbs");
const parser = require("body-parser");
const passport = require("passport");
const cookie = require("cookie-parser");
const bcrypt = require("bcrypt");
const Event = require("./models/Event");
const eventsController = require("./controllers/event");
const methodOverride = require("method-override");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
// app.use(cookieParser());
// app.use(bodyParser());

app.get("/", (req, res) => {
  Event.find({}).then(events => {
    res.render("index", { events });
  });
});

app.use("/events", eventsController);

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log("Funciona!");
});
