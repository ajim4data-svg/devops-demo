const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Version 2 🚀 Kubernetes Update");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
// trigger deploy