const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.static("public"));

const projects = require("./api/projects");
app.use("/api", projects);

app.listen(port, () => {
  console.log(`Jasiokl app listening at http://localhost:${port}`);
});
