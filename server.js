const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.static("public"));

const projects = require("./api/projects");
app.use("/api", projects);

app.listen(port, () => {
  console.log(`Jasiokl app listening at http://localhost:${port}`);
});
