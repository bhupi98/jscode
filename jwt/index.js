// function getSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(getSum([4, 34, 24, 2]));

function getSum(arr, number) {
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
console.log(getSum([3, 5, 6, 9, 2], 11));

function getStringOccurance(string, c) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == c) {
      count += 1;
    }
  }
  return count;
}
console.log(getStringOccurance("hello", "l"));

function getWordOccurance(str, search) {
  let record = str.match(new RegExp(search, "gi"));
  return str.match(new RegExp(search, "gi")).length;
}
console.log(getWordOccurance("My Name is Bhupi Bhupi", "Bhupi"));
