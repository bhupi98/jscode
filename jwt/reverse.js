let demo = [34, 343, 64, 45, 34, 434, 12, 3, 4];

//console.log(demo.reverse());
let reversedarray = [];
console.log(demo.length);
console.log(demo.length - 1);
for (let i = demo.length - 1; i >= 0; i--) {
  console.log("value of i", i);
  reversedarray.push(demo[i]);
}
console.log("reversed array", reversedarray);
