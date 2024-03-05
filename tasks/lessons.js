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

//**************************************************************************************** */

//task - 1 with node.js
fs.readFile("./num", (err, res) => {
  if (err) {
    console.log("Error");
  } else {
    const data = res
      .toString() //here is the answer  11 22 33
      .split(" ") //here is the answer ['11','22','33']
      .reduce((total, num) => +total + +num) //here is the answer:66(in array)
      .toString(); //here is the answer:66(in string)
    writeFile("./num2", data, (error, respons) => {
      if (error) throw error;
      console.log("Success");
    });
  }
});

//task - 2 with node.js
const text =
  "javascript is the best language for front end and we are learning node.js which is javascript framework";
writeFile("./text1.txt", text, (err, res) => {});
readFile("./text1.txt", (err, res) => {
  const data2 = res.toString().replaceAll("javascript", "JavaScript");
  writeFile("./text2.txt", data2, (err, res) => {
    if (err) throw err;
    console.log("success - 2 ");
  });
});
//here is the answer:'JavaScript is the best language for front end and we are learning node.js which is JavaScript framework'

// 1. Create Directory:
//    Write a Node.js script that creates a new directory named "myFolder" using the `fs.mkdir` function.

const fileName = "myFile";
fs.mkdir(fileName, (err, data) => {
  if (err) throw err;
});
//*****************************************************************************************************
// 2. Check if Directory Exists:
//    Create a Node.js script that checks if a directory named "myFolder" exists using the `fs.existsSync`    function. Log "Directory exists" if it does, otherwise log "Directory does not exist".

const checkFolder = "./myFile";
if (fs.existsSync(checkFolder)) {
  console.log("vardir");
} else {
  console.log("toxdur");
}
//*****************************************************************************************************
// 3. List Files in a Directory:
//    Write a Node.js script that lists all files in the current directory using the `fs.readdir`        	 function. Log the list of file names to the console.

const commonFiles = "./";
fs.readdir(commonFiles, (err, data) => {
  if (err) throw err;
  res.forEach((fileItem) => {
    console.log(fileItem);
  });
});
//*****************************************************************************************************
// 4. Read File Content:
//    Create a Node.js script that reads the content of a file named "sample.txt" using the `fs.readFile` 	  function. Log the content to the console.

const filePath = "sample.txt";
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
//*****************************************************************************************************
// 6. Write to a File:
//    Write a Node.js script that writes the string "Hello, World!" to a file named "output.txt" using the    `fs.writeFile` function.

// const filePath = "data.txt";
fs.writeFile(filePath, "Hello, World", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Success");
});

// 1. Append to a File:
//    Develop a Node.js script that appends the string "This is an appended text." to a file named       	      "output.txt" using the `fs.appendFile` function.

appendFile("./output.txt", metin, "utf-8", (err, data) => {
  if (err) throw err;
});
//*****************************************************************************************************
// 2. Copy File:
//    Create a Node.js script that copies the content of a file named "source.txt" to another file named  	      "destination.txt" using the `fs.copyFile` function.

copyFile("./data.txt", "./output.txt", (err, data) => {
  if (err) throw err;
});

//*****************************************************************************************************
//  3. Rename File:
//     Write a Node.js script that renames a file from "oldName.txt" to "newName.txt" using the `fs.rename` 	 function.

rename("./oldName.txt", "./newName.txt", (err, data) => {
  if (err) throw err;
});
//*****************************************************************************************************
// 4. Rename File:
//   Write a Node.js script that renames a file from "oldName.txt" to "newName.txt" using the `fs.rename` 	 function.

rename("./oldName.txt", "./newName.txt", (err, data) => {
  if (err) throw err;
});
//*****************************************************************************************************
//  5. Delete File:
//     Develop a Node.js script that deletes a file named "toBeDeleted.txt" using the `fs.unlink` function.

unlink("./ppm.txt", (err, data) => {
  if (err) throw err;
});
