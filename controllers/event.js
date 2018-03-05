const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const path = require("path");

//At home page, upon the client's request, respond by:
//Going into the EVENT object, and gettin the body of
//what they have created. Then, redirect to the homepage.
router.post("/", (req, res) => {
  Event.create(req.body).then(event => {
    res.redirect("/");
  });
});

//when redirected to the /new path, respond by rendering
//the new events page, where a client can input her own
//data to create a new event.
router.get("/new", (req, res) => {
  res.render("events/new");
});

//when client clicks link to request a certain event to
//edit, upon her request, respond by going to the
//EVENT object and finding the id, which is the required
//parameter for the edit. Then, render that event's information
//into the event edit form.
router.get("/edit/:id", (req, res) => {
  Event.findOne({ _id: req.params.id }).then(event => {
    res.render("events/edit", event);
  });
});

//
router.put("/:id", (req, res) => {
  Event.findOneAndUpdate({ _id: req.params.id }, req.body).then(Event => {
    res.redirect("/");
  });
});

router.delete("/:id", (req, res) => {
  Event.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
