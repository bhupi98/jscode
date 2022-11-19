const express = require("express");
const runQuery = require("./db");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/login", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  console.log(req.body);
  let user = await runQuery("select * from jwt where email=? AND password=?", [
    email,
    password,
  ]);
  console.log(user);
  if (user.length != 0) {
    let userData = user[0];
    let token = jwt.sign({ user }, "bhupi", { expiresIn: "1m" });
    res.status(200).send({ userData: userData, token: token });
  } else {
    res.status(400).send("Please register first");
  }
});

app.get("/page", async (req, res) => {
  let numPerPage = 20;
  let page = 1;
  let skip = (page - 1) * numPerPage;
  let limit = skip + "," + numPerPage;
  console.log(limit);
  let data = await runQuery("select count(*) as numRows from customers");
  console.log(data);
  let numRows = data[0].numRows;
  let numPages = Math.ceil(numRows / numPerPage);
  let datalimit = await runQuery("select * from customers limit=?", limit);
  console.log(datalimit, numPages);
});
app.get("/", async (req, res) => {
  let limit = req.query.limit || 5;
  limit = parseInt(limit);
  // page number
  let page = req.query.page || 2;
  if (page == 0) {
    page = 1;
  }
  // calculate offset
  const offset = (page - 1) * limit;
  let data = await runQuery(
    "SELECT * FROM classicmodels.customers limit ? offset ?;",
    [limit, offset]
  );
  console.log(data);
  let data1 = {
    data: {
      totalPages: data.length,
      currentPage: page,
      data,
    },
    header: null,
    message: null,
    success: true,
  };

  res.status(200).send(data1);
});

app.listen(4000, console.log("server is running on 4000"));
