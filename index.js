const fs = require("fs");

function upper(text) {
  let uppercaseText = text.toUpperCase();
  fs.writeFileSync("./src/demo.txt", uppercaseText, { flag: "a" });
}
upper("hay");

function bdd(copy, create) {
  fs.writeFileSync(create, copy, { flag: "a" });
  fs.readFileSync(create);
}
bdd("Hello", "./demo.txt");
