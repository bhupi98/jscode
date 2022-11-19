// let arr = [23, 0, 45, 67, 0, 57, 98, 0, 45, 34, 78, 0, 67, 0, 45, 89];
// // arr = [23,45,67,57,98,45,34,78,67,45,89,0,0,0,0,0]
// let actualNumArray = [];
// let zeroArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] != 0) {
//     actualNumArray.push(arr[i]);
//   }
//   // actualNumArray.push(arr[i] == 0);
// }
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 0) {
//     zeroArr.push(arr[i]);
//   }
// }
// console.log(actualNumArray.concat(zeroArr));
// // console.log(actualNumArray);

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// Person.prototype.age = age;
// let p1 = new Person("bhupi", "cool", 34);
// console.log(p1);

let array = [4, 8, 6, 9, 45, 79, 789, 1002];

let i = 0;
let finalNumber = [];
let sum = 0;

let result = 1011;

function furr(sum, i, res) {
  if (i == array.length) {
    //  console.log(res, sum);

    if (sum == result) {
      //console.log("res", res);
      finalNumber.push(res);
      console.log("gotcha", res, finalNumber);
    }

    return sum;
  }

  furr(sum, i + 1, res);

  furr(sum + array[i], i + 1, res + array[i] + " ");
}
console.log("final", finalNumber);

furr(0, 0, "");
