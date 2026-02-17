// ❗️TEST ONLY: Intentionally vulnerable code for Snyk Code pipeline validation
const { exec } = require("child_process");

function run(userInput) {
  exec("echo " + userInput, (err, stdout, stderr) => {
    if (err) console.error(err);
    console.log(stdout);
  });
}

run(process.argv[2] || "hello");
