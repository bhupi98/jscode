// //Count the occurrence of keys and convert the result into array of objects where each object belongs to one key and it's occurrence (count).Example
// let demo = [
//   { language: "JavaScript" },
//   { language: "JavaScript" },
//   { language: "C++" },
//   { language: "TypeScript" },
// ];
// let jcount = 0;
// let count = 0;
// let tcount = 0;
// for (let index = 0; index < demo.length; index++) {
//   const element = demo[index];
//   if (element.language == "JavaScript") {
//     jcount += 1;
//   }
//   if (element.language == "C++") {
//     count += 1;
//   }
//   if (element.language == "TypeScript") {
//     tcount += 1;
//   }
// }
// demo.forEach(function (value) {
//   if (value.language == "JavaScript") {
//     value.jcount = jcount;
//   }
//   if (value.language == "C++") {
//     value.count = count;
//   }
//   if (value.language == "TypeScript") {
//     value.tcount = tcount;
//   }
// });
// console.log(count, jcount, tcount, demo);

//Given an unsorted array arr[] with both positive and negative elements, the task is to find the smallest positive number missing from the array.

// let demo = [2, 3, 7, 6, 8, -1, -10, 15, 1];
// for (let index = 0; index < demo.length; index++) {
//   const element = demo[index];
//   if (element > 0) {
//     if (element % 2 == 0 && element) {
//     }
//   }
// }

//find the longest common prefix.Examples:
let demo = ["geeksforgeeks", "geeks", "geek", "geezer"];
function commonPre(prefix, demo) {
  let prefixString = "";
  let len1 = prefix.length;
  let len2 = demo.length;
  for (let i, j = 0; i < len1, j < len2; i++, j++) {
    if (prefix[i] != demo[j]) {
    }
  }
}
function common(demo) {
  let prefix = demo[0];
  let demoLen = demo.length;
  console.log(prefix); //geeksforgeeks
  for (let index = 0; index < demoLen; index++) {
    prefix = commonPre(demo[0], demo[index]);
  }
}
common(demo);
