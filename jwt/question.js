// const hello1 = () => {
//   return "Data";
// };

// const a4 = hello1();

// console.log("a4", a4);

// const hello2 = async () => {
//   return "Data";
// };

// const a5 = hello2();

// console.log("a5", a5);

//better way of writing this

// const isGoingOut = true;

// let answer;

// if (isGoingOut === true) {
//   answer = "Yes";
// } else {
//   answer = "No";
// }

// isGoingOut === true ? (answer = "Yes") : (answer = "No");

// function xyz() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i); // 0,1,2,3,4
//   }

//   console.log("Starting i", i); //0

//   for (let i = 0; i < 3; i++) {
//     console.log(i); // 0,1,2,
//   }

//   console.log("Ending i", i); // 0
// }

// xyz();

// const a = [1, 2, 3, 4, 5];

// const [c, d, ...b] = a;

// console.log(c);
// console.log(d);
// console.log(b);

// const express = require("express");

// const router = express.Router();

// function f1(req, res, next) {
//   console.log("f1");
// }

// function f2(req, res, next) {
//   console.log("f2");
// }

// function f3(req, res, next) {
//   console.log("f3");
// }

// router.use("/read", f1, f2, f3, (req, res) => {
//   console.log("final");

//   res.send("Cone");
// });
