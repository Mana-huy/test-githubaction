// TEST ONLY
const { exec } = require("child_process");
const input = process.argv[2];
exec(`ls ${input}`);
