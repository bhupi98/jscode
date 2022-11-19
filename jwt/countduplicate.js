let demo = [34, 343, 64, 45, 34, 434, 12, 3, 5, 34, 4, 3, 4, 5];
let count = {};
demo.forEach((element) => {
  //console.log("element", element);
  console.log("element1[count]", count[element]);
  // count[element] = (count[element] || 0) + 1;
  //console.log("count[element", count[element]);
});
console.log(count);
