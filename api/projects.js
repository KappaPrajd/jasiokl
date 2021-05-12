const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/projects", (req, res) => {
  const data = JSON.parse(fs.readFileSync("api/projects.json"));
  res.json(data);
});

module.exports = router;
