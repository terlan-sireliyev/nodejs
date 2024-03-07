// import { fs } from "fs";

const [, , emr, ...data] = process.argv;
const key = "ali";
let count = 0;
if (emr === "add") {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === key) {
      count++;
    }
  }
  console.log(count++);

  //   console.log(`${data}`);
}
