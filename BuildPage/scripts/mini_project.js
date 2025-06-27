const mongoose = require("mongoose");
const MiniProject = require("../models/miniProject");

mongoose.connect("mongodb://localhost:27017/techlearn")
  .then(async () => {
    console.log("✅ MongoDB connected");

    await MiniProject.deleteMany({});

    await MiniProject.insertMany([
      {
        title: "Simple Calculator App",
        description: "A basic calculator using HTML, CSS, and JS",
        image: "/assets/cards/mini_projects/calculator.png",
        tags: ["Python", "Beginner"]
      },
      {
        title: "Basic To-Do List App",
        description: "A simple app to manage tasks and mark them complete",
        image: "/assets/cards/mini_projects/todo.png",
        tags: ["JS", "Beginner"]
      },
      {
        title: "Simple Weather App",
        description: "Fetch and display weather data using an API",
        image: "/assets/cards/mini_projects/weather.png",
        tags: ["Python", "Beginner"]
      }
    ]);

    console.log("✅ Mini projects seeded");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Seeding failed:", err);
  });
