const Event = require("../models/Event");

Event.remove({}).then(() => {
  Promise.all([
    Event.create({
      title: "Deeper: Night of Prayer and Worship",
      date: "March 5, 2018",
      time: "7 PM",
      location: "The Miracle Theater, 535 8th Street SE, Washington DC",
      description:
        "Come receive prayer and join us for worship and guided prayer in an intimate, acoustic setting at NCC's Miracle Theatre on Barracks Row."
    })
  ]).then(() => {
    console.log("done");
    process.exit();
  });
});
