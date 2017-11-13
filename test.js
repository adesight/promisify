const fs = require("fs");
const promisify = require("./index");

const read = promisify(fs.readFile);

read("./hello.txt", "utf8")
  .then(res => console.assert(res === "Hello,Promise!", "test fail!"))
  .catch(console.log);
