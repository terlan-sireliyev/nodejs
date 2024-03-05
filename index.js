import fs from "fs";
import axios from "axios";
const [, , emr, ad, ...data] = process.argv;
// const letter = data.join(" ");

if (emr === "add") {
  fs.writeFileSync(ad, data.join(" "));
}
