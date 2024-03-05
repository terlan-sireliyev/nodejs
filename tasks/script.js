const fs = require("fs");

//task1
function copyFaylText(first, second) {
  const text = fs.readFileSync(first, "utf-8");
  fs.writeFileSync(second, text);
}
copyFaylText("./demo.txt", "./secondFile.txt");

// task2;
const d = fs.readFileSync("./demo.txt", "utf-8");
fs.writeFileSync("./secondFile.txt", d);
