const fs = require("fs");
const os = require("os");
// const http = require("http");
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.type());
// console.log(os.uptime());
// console.log(os.version());

// fs.writeFileSync("./demo.txt", os.version());
// fs.writeFileSync("./demo.txt", `${os.totalmem() - os.freemem()}`);
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     // const file = fs.readFileSync("pages/index.html");
//     const file = JSON.stringify(["adem", ",samir", "Sefeq"]);
//     res.end(file);
//   } else if (req.url === "/about") {
//     const file = fs.readFileSync("pages/about.html");
//     res.end(file);
//   }
// });
// server.listen(5000);
// npm i -g nodemon
// 2-ci ders

const [, , emr, faylName, ...data] = process.argv;
if (emr === "open") {
  console.log(fs.readFileSync(faylName, "utf-8"));
} else if (emr === "write") {
  fs.writeFileSync(faylName, data.join(" "));
} else if (emr === "rename") {
  fs.renameSync(faylName, data[0]);
} else if (emr === "delete") {
  fs.unlinkSync(faylName);
}

//******************************************** */
// const [, , emr, ad, ...data] = process.argv;
//1
if (emr === "mr") {
  console.log(`salam ${ad}`);
} else if (emr === mrs) {
  console.log(`salam ${ad}v`);
}
//2
if (emr === "wa") {
  fs.writeFileSync("./data.txt", `Whatpsapp: ${ad}: ${data.join(" ")} \n`, {
    flag: "a",
  });
} else if (emr === "tg") {
  fs.writeFileSync("./data.txt", `Telegram: ${ad}: ${data.join(" ")} \n`, {
    flag: "a",
  });
} else if (emr === "ln") {
  fs.writeFileSync("./data.txt", `Linkedin: ${ad}: ${data.join(" ")} \n`, {
    flag: "a",
  });
}

//************************* */
const letter = data.join(" ");
if (emr === "add") {
  fs.writeFileSync("./data.txt", `${ad}:${letter}\n`);
}
//weather
if (emr === "add") {
  fs.writeFileSync("./data.txt", `${ad}:${letter}C\n`);
}

//with axios
axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  const data = res.data;
  data.forEach((element) => {
    fs.writeFileSync(
      "./data.txt",
      `Name:${element.name}:\n Username:${element.username}\n---------- \n `,
      {
        flag: "a",
      }
    );
  });
});
