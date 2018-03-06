// const express = require("express");
// const router = express.Router();
// const bodyParser = require("body-parser");
// const passport = require("passport");
// const User = require("..models/User");
// const Event = require("../models/Event");

// // GET /signup
// router.get("/signup", (req, res) => {
//   res.render("signup", { message: req.flash("signupMessage") });
// });

// // POST /signup
// router.post("/signup", (req, res) => {
//   const signupStrategy = passport.authenticate("local-signup", {
//     successRedirect: "/hikes",
//     failureRedirect: "signup",
//     failurFlash: true
//   });
//   return signupStrategy(req, res);
// });

// // GET /login
// router.get("/login", (req, res) => {
//   res.render("login", { message: req.flash("loginMessage") });
// });

// // POST /login
// router.post("/login", (req, res) => {
//   const loginProperty = passport.authenticate("local-login", {
//     successRedirect: "/",
//     failureRedirect: "/login",
//     failureFlash: true
//   });
//   return loginProperty(req, res);
// });

// // GET /logout
// router.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect("/");
// });

// module.exports = router;
