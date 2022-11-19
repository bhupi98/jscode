// let arr = [4, 8, 6, 9, 45, 79, 789, 1002];
// //k = 1011;
// let k = 1011;
// let numbers = [];

// for (let i = 0, j = i + 1; i, j < arr.length; i++, j++) {
//   console.log(arr[i] + arr[j]);
//   if (arr[i] + arr[j] == k) {
//     numbers.push(arr[i], arr[j]);
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] == k) {
//       numbers.push(arr[i], arr[j]);
//     }
//   }
// }
// console.log(numbers);

// let i = 0;
// let j = 0;
// while (i <= j) {
//   sum[i][j] += i + j;
//   j++;

//   if (j == M) {
//     j = 0;
//     i++;
//   }
// }

// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise

//   .then(function () {
//     console.log("Success 1");
//   })

//   .then(function () {
//     console.log("Success 2");
//   })

//   .then(function () {
//     console.log("Success 3");
//   })

//   .catch(function () {
//     console.log("Error 1");
//   })

//   .then(function () {
//     console.log("Success 4");
//   });

// function job() {
//   return new Promise((resolve, reject) => {
//     //reject();
//     resolve();
//   });
// }
// let promise = job();
// promise
//   .then((root) => console.log("root", root))
//   .catch((root1) => console.log("root1", root1))
//   .then((root3) => console.log("root3", root3));

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise

//   .then(function (data) {
//     console.log(data);

//     return job(false);
//   })

//   .catch(function (error) {
//     console.log(error);

//     return "Error caught";
//   })

//   .then(function (data) {
//     console.log("data");
//     console.log(data);

//     return job(true);
//   });

// // .catch(function (error) {
// //   console.log(error);
// // });

// let p = new Promise(function () {
//   return "Ok";
// });
// console.log(p);
// let p1 = p.then((data) => {
//   return data;
// });
// console.log(p1);
// let p2 = p1.then(function (data) {
//   return data + "Bye";
// });
// console.log(p2);

var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("OK");
  }, 2000);
});

p.then(function (data) {
  console.log(data);
}).then(function (data) {
  console.log(data);
});
