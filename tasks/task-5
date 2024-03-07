// import fs from "fs";
// import axios from "axios";

// //task1
// //Task1. Ele proqram yazin ki,  terminalda:  node app 5 * 6 yazandan sonra, netice.txt
// //faylina bu setir elave edilsin: 5 * 6 = 30. Ikinci defe yazanda, node app 12 / 4,
// //netice.txt-ye 12 / 4 = 3. setiri elave edilsin. Diqqet edin ki, her yeni setir
// //elave edilende evvelki setir silinmesin.
// const [, , num1, command, num2] = process.argv;
// if (command === "+") {
//   const result = `${+num1} + ${+num2} = ${+num1 + +num2}\n`;
//   fs.appendFile("./netice.txt", result, () => {});
// } else if (command === "-") {
//   const result = `${+num1} - ${+num2} = ${+num1 - +num2}\n`;
//   fs.appendFile("./netice.txt", result, () => {});
// } else if (command === "*") {
//   const result = `${+num1} * ${+num2} = ${+num1 * +num2}\n`;
//   fs.appendFile("./netice.txt", result, () => {});
// } else if (command === "/") {
//   const result = `${+num1} / ${+num2} = ${+num1 / +num2}\n`;
//   fs.appendFile("./netice.txt", result, () => {});
// }

// //task-2
// // #task
// // Contact application yazin. Men terminalda node app add Ali 0709578659 yazsam,
// //contact.txt-e bu setiri elave etsin:
// // Ali: 0709578659

// node app add Ravan 0809787   -> Ravan: 0809787
// const [, , commond, name, number] = process.argv;
// if (commond === "add") {
//   fs.appendFile("./contact", ` ${name}: ${number}\n`, () => {});
// }

// //task-3
// // Hava haqqinda melumat burosu: weather.txt
// // node app Baki +27 yazsam   weather.txt faylina Baki: +27C yazsin, mes:
// // node app Lenkeran +5 -> Lenkeran: +5C
// // node app Sibir -10 -> Sibir: -10C
// const [, , commond, weather] = process.argv;
// if (commond === "show") {
//   console.log(`${weather}C`);
// }

// //task-4
// // #Task1.  Istifadeci adini goturun ve user_name.txt faylina yazin.
// // #Task2 . https://catfact.ninja/breeds endpoint-den breed ve country-ni cats-info.txt faylina yazin. Mes:
// // Cat Breed: Abyssinian
// // Cat Country: Ethiopia
// // —————————
// // Cat Breed : Aegean
// // Cat Country: Greece
// axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//   const data = res.data;
//   data.forEach((element) => {
//     fs.writeFileSync(
//       "./user_name.txt",
//       `Name:${element.name}:\n Username:${element.username}\n---------- \n `,
//       {
//         flag: "a",
//       }
//     );
//   });
// });

// // task-5
// // #task .txt fayllarindan ibaret bir papka olsun. Proqram yazin ki,
// // 1. node index.js open ali.txt desem, hemin faylin icindekileri mene gostersin.
// const [, , command, fileName] = process.argv;
// if (command === "open" && fileName === "ali.txt") {
//   fs.readFile("./task.txt", "utf8", (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(data);
//       fs.writeFile("./demo.txt", data, (err) => {
//         if (err) {
//           console.error(err);
//         } else {
//           console.log("okey");
//         }
//       });
//     }
//   });
// }

// //task-6;
// // node index.js write ali.txt bu elave text-dir. Istediyim qeder soz yaza bilerem.
// // yazsam, ali.txt-e  bu elave text-dir. Istediyim qeder soz yaza bilerem.
// // sozlerini elave etsin.
// const [, , command, fileName, ...data] = process.argv;
// if (command === "open" && fileName === "ali.txt") {
//   fs.writeFile("./demo2.txt", `${data}`, (err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log("okey");
//     }
//   });
// }
