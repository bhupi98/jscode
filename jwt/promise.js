let promise = new Promise((resolve, reject) => {
  let a = 20;
  if (a == 20) {
    resolve(a);
  } else {
    reject("some error got");
  }
});
promise
  .then((data) => console.log("ata", data))
  .catch((error) => console.log(error));
