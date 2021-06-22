const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/projects", (req, res) => {
  const data = JSON.parse(fs.readFileSync("api/projects.json"));
  res.json(data);
});

router.get("/project", (req, res) => {
  const data = JSON.parse(fs.readFileSync("api/projects.json"));
  const projectMeta = data.filter((el) => el.id === req.query.id)[0];

  if (projectMeta === undefined) {
    return res.json({ error: "Project not found" });
  }

  const projectItems = fs
    .readdirSync(projectMeta.pathAbsolute)
    .map((el) => projectMeta.pathRelative + el);

  res.json({ projectMeta, projectItems });
});

module.exports = router;
