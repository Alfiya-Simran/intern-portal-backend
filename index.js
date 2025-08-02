const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Dummy intern data
const intern = {
  name: "Alfiya Simran",
  referralCode: "alfiya2025",
  donationsRaised: 1200,
};

// Dummy leaderboard data
const leaderboard = [
  { name: "Alfiya Simran", donations: 1200 },
  { name: "Rahul Mehta", donations: 950 },
  { name: "Sneha Roy", donations: 870 },
  { name: "Amit Kumar", donations: 800 },
  { name: "Sara Khan", donations: 780 },
];

// Routes
app.get("/intern", (req, res) => res.json(intern));
app.get("/leaderboard", (req, res) => res.json(leaderboard));
app.get("/", (req, res) => {
  res.send("Intern Portal Backend API is running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
