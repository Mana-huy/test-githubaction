// TEST ONLY - intentionally vulnerable

const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/", (req, res) => {
  const cmd = req.query.cmd; // user input
  exec(cmd);                 // dangerous sink
  res.send("done");
});

app.listen(3000);
