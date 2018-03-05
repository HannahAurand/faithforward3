const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

router.post("/", (req, res) => {
  Event.create(req.body).then(event => {
    res.redirect("/");
  });
});

router.get("/new", (req, res) => {
  res.render("events/new");
});

router.put("/:id", (req, res) => {
  Event.findOneAndUpdate({ _id: req.params.id }, req.body).then(Event => {
    res.redirect("views/events/edit");
  });
});

router.delete("/:id", (req, res) => {
  Event.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
