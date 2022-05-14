const express = require("express");
const app = express();
const port = 3005;

app.get("/", (req, res) => {
  res.send("Hello SLIIT!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
