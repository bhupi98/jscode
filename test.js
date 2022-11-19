// function asyncTask() {
//   return functionA()
//     .then((valueA) => functionB(valueA))
//     .then((valueB) => functionC(valueB))
//     .then((valueC) => functionD(valueC))
//     .catch((err) => logger.error(err));
// }

// // let fs = require("fs");
// // fs.readFile("demo.txt", (err, data) => {
// //   if (err) throw err;
// //   fs.writeFile("abc.txt", data, (err) => {
// //     if (err) throw err;
// //     console.log("File has been wrritten successfully");
// //   });
// // });

// // let EventEmitter = require("events");
// // let event = new EventEmitter();

// // let data=await asyncTask()
// // let data1=await
// asyncTask();

// async function asyncTask() {
//   let valueA = await functionA();
//   let valuB = await functionB(valueA);
//   let valueC = await functionC(valuB);
//   let valueD = await functionD(valueC);
//   return valueD;
// }

// let rupees = [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000];

// function makeChange(rupees, change) {
//   let changes = [];
//   for (let i = 0; i < rupees.length; i++) {
//     for (let j = 0; j < rupees.length; j++) {
//       if (rupees[i] + rupees[j] == change) {
//         changes.push(rupees[i], rupees[j]);
//       }
//     }
//   }
//   console.log(changes);
//   return changes;
// }

// console.log(makeChange(rupees, 60));

// function main(words) {
//   let n = words.length;
//   commonPrefix(words, n);
//   function commonPrefix(words, n) {
//     let prefix = words[0];
//     for (let i = 1; i < n - 1; i++) {
//       prefix = commonPrefixUtil(prefix, words[i]);
//       console.log(prefix);
//     }
//   }
//   function commonPrefixUtil(str1, str2) {
//     let result = "";
//     let n1 = str1.length,
//       n2 = str2.length;
//     // Compare str1 and str2
//     for (let i = 0, j = 0; i <= n1 - 1 && j <= n2 - 1; i++, j++) {
//       if (str1[i] != str2[j]) {
//         break;
//       }
//       result += str1[i];
//     }

//     return result;
//   }
// }
// main(["geeksforgeeks", "geeks", "geek", "geezer"]);
// function commonPrefix(words, n) {
//   let prefix = words[0];
//   for (let i = 1; i < n - 1; i++) {
//     prefix = commonPrefixutil(prefix, words[i]);
//   }
//   return prefix;
// }
// function commonPrefixutil(str1, str2) {
//   // console.log("str1", str1, "str2", str2);
//   let n1 = str1.length;
//   let n2 = str2.length;
//   for (let i = 0, j = 0; i <= n1 - 1 && j <= n2 - 1; i++, j++) {
//     console.log("str1", str1[i], "str2", str2[j]);
//   }
// }
// let arr = ["geeksforgeeks", "geeks", "geek", "geezer"];
// let n = arr.length;
// let result = commonPrefix(arr, n);
// console.log(result);

// let demo = [334, 23, 24, 26, 2, 5, 66, 90, 90, 34, 24, 23];
// let reverseArray = [];
// for (let i = demo.length - 1; i >= 0; i--) {
//   reverseArray.push(demo[i]);
// }
// console.log(reverseArray);
// let duplicate = demo.filter((item, index) => {
//   return demo.indexOf(item) != index;
// });
// console.log(duplicate);

// let count = {};
// demo.forEach((element) => {
//   count[element] = (count[element] || 0) + 1;
// });
// console.log(count);

// task a,taskb taskb is dependent on taska , taska taskb
