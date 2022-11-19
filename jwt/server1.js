// let dummy = [300, 200, 100, 90, 80, 80, 100, 200];
// let newArr = [];
// let newObj = {};
// console.log(dummy.length - 1);

// // reversing the array
// for (let index = dummy.length - 1; index >= 0; index--) {
//   newArr.push(dummy[index]);
// }
// console.log(newArr);
// console.log([...new Set(dummy)]);

// let duplicates = dummy.filter((item, index) => {
//   return dummy.indexOf(item) != index;
// });
// console.log(duplicates);

// dummy.forEach((element) => {
//   console.log(newObj[element]);
//   newObj[element] = (newObj[element] || 0) + 1;
//   console.log(newObj[element]);
// });

// console.log(newObj);

// let student = (function () {
//   let id = 12;
//   let rollNo = 24;
//   let marks = 80;
//   let obj = {
//     setMarks: function (newMarks) {
//       marks = newMarks;
//     },
//     getMarks: function () {
//       return marks;
//     },
//   };
//   return obj;
// })();

// console.log(student.getMarks());
// student.setMarks(90);
// console.log(student.getMarks());

// let string = "Company";
// let stringArray = string.split("");
// let reverseArray = [];
// //console.log(stringArray.reverse());
// for (let index = stringArray.length - 1; index >= 0; index--) {
//   reverseArray.push(stringArray[index]);
// }
// console.log(reverseArray);
// let word = "I Love You";
// let reverseWord = word.split(" ");
// let join = reverseWord.reverse();
// let proper = join.join(" ");
// console.log(proper);

// function countString(str, letter) {
//   let count = 0;

//   // looping through the items
//   for (let i = 0; i < str.length; i++) {
//     // check if the character is at that position
//     if (str.charAt(i) == letter) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(countString("bhupender", "e"));

// let n = "bhupender is cool bhupender is dumb";
// console.log(n.match(/e/g).length);

// function getCharCount(str, l) {
//   let count = 0;
//   for (i = 0; i < str.length; i++) {
//     if (str.charAt(i) == l) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(getCharCount("hello", "l"));
// let demo = "bhupender";
// let demoS = demo.split("");
// let obj = {};
// demoS.forEach((element) => {
//   obj[element] = (obj[element] || 0) + 1;
// });
// console.log(obj);

function getSums(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str[i];
  }
  return sum;
}

console.log(getSums([1, 3, 5, 5]));

function getSumByThird(arr, number) {
  let sum = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == number) {
        sum.push(arr[i], arr[j]);
      }
    }
  }
  return sum;
}
console.log(getSumByThird([1, 4, 2, 5, 6], 7));
