const express = require("express");
const app = express();

app.listen(3001, () => {
  console.log("Successfully connected on port 3001");
});

app.get("/", (req, res) => {
  res.send("<h2>Hello World</h2>");
});
