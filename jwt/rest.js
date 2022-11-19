// rest
// it gives you the array  from the list of parameter

// spread
// it gives you the list of argument from array

function a(...args) {
  console.log(args);
}
a("a", "b", "c");

function b(a, b) {
  console.log(a, b);
}
b(...[34, 34]);
