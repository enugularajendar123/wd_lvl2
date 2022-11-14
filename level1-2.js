const hello = () => {
  console.log("Hello Node.js!");
};
hello();

const fs = require("fs");
fs.writeFile(
  "sample.txt",
  "Hello World. Welcome to Node.js File System module.",
  (err) => {
    if (err) throw err;
    console.log("File created!");
  }
);
fs.readFile("sample.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
const readline = require("readline");
const lineDetail = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
lineDetail.question("Please provide your name -", (name) => {
  console.log(`Hi ${name}!`);
  lineDetail.close();
});
const args = require("minimist")(process.argv.slice(2));

console.log(args);
