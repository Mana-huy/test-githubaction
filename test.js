// SAFE EXAMPLE - no vulnerability

const express = require("express");
const { execFile } = require("child_process");

const app = express();

app.get("/", (req, res) => {
  const allowedCommands = ["date", "uptime"];

  const cmd = req.query.cmd;

  // 許可されたコマンドのみ実行
  if (!allowedCommands.includes(cmd)) {
    return res.status(400).send("Invalid command");
  }

  // execFile は shell を使わないため安全
  execFile(cmd, [], (err, stdout) => {
    if (err) {
      return res.status(500).send("Error");
    }
    res.send(stdout);
  });
});

app.listen(3000);
