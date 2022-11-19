let demo = [34, 343, 64, 45, 34, 434, 12, 3, 5, 34, 4, 3, 4, 5];
let duplicate = demo.filter((item, index) => {
  return demo.indexOf(item) !== index;
});
console.log(duplicate);
