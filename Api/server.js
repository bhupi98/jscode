const moment = require("moment");
const express = require("express");
const app = express();
const { runQuery } = require("./db");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post("/post", async (req, res) => {
  //console.log("req.body", req.body);
  let actionitemcode = "ACI110000000204";
  let companyId = req.body.companyId;
  let forum = req.body.forum;
  let committee = req.body.committee;
  let track = req.body.track;
  let companyName = req.body.companyName;
  let priority = req.body.priority;
  let statusId = req.body.statusId;
  let performerList = req.body.performerList;
  let supplierList = req.body.supplierList;
  let createddate = new Date();
  let lastmodificationdate = new Date();
  let performerAr = [];
  let sql =
    "insert into actionitems (actionitemcode,statusid,companyid,createddate,lastmodificationdate) values (?,?,?,?,?)";
  let sql1 =
    "INSERT INTO `demo`.`actionitem_performers` (`actionitemcode`, `performer_name`, `performer_id`) VALUES ?";
  let sql2 =
    "INSERT INTO `demo`.`actionitem_suppliers` (`id`, `actionitemcode`, `sp_company_name`, `sp_company_id`) VALUES ?";

  console.log("performerArr", performerAr);
  let array = [
    actionitemcode,
    statusId,
    companyId,
    createddate,
    lastmodificationdate,
    companyName,
    forum,
    committee,
    track,
  ];
  let data = await runQuery(sql, array);
  console.log("data", data);
  if (data.insertId != null && data != undefined) {
    let performers = await runQuery(sql1, [
      performerList.map((item) => [
        actionitemcode,
        item.performerName,
        item.performerId,
      ]),
    ]);
    let suppliers = await runQuery(sql2, [
      supplierList.map((item) => [
        item.id,
        actionitemcode,
        item.spCompanyName,
        item.spCompanyId,
      ]),
    ]);
  }
  res.send(req.body);
});
app.get("/get/:id", async (req, res) => {
  let id = req.params.id;
  let sql = "select * from actionitems where actionitemid=?";
  let array = [id];
  let date = "YYYY/MM/DD HH:mm:ss a";
  let data = await runQuery(sql, array);
  data.map(function (item) {
    item.createddate = new Date(item.createddate).toLocaleString("en-Us", {
      timeZone: "US/Central",
    });
    item.lastmodificationdate = new Date(
      item.lastmodificationdate
    ).toLocaleString("en-Us", { timeZone: "US/Central" });
    item.createdDemo = moment(
      new Date(item.createddate).getTime() + -21600 * 1000
    ).format(date);
  });
  console.log(data);
  res.send(data);
});

app.get("/list", async (req, res) => {
  let limit = req.query.limit || 2;
  let page = req.query.page || 1;
  let offset = (page - 1) * limit;
  let sortedField = req.query.sortedField;
  let dirc = req.query.dirc;
  console.log("sortedField", sortedField);
  console.log("dirc", dirc);
  let dataArr = [];
  //let sql = "SELECT * FROM demo.actionitems limit ? offset ? order by ? ?";
  let sql = `select * from demo.actionitems order by ${sortedField} ${dirc} limit ${limit} offset ${offset}`;
  let data = await runQuery(sql, [limit, offset, sortedField, dirc]);
  data.map(async function (item) {
    let obj = {};
    obj.actionitemcode = item.actionitemcode;
    obj.priority = item.priority;
    obj.urgency = item.urgency;
    obj.impact = item.impact;
    dataArr.push(obj);
  });
  console.log("dataArr", dataArr);
  let performerArray;
  let priorityObj = {};
  let urgencyObj = {};
  let impectObj = {};
  let priority;
  let impect;
  let urgency;
  for (const obj of dataArr) {
    try {
      let sql = `select * from demo.actionitem_performers where actionitemcode="${obj.actionitemcode}" `;
      performerArray = await runQuery(sql);
    } catch (error) {
      console.log(error);
    }
  }
  for (const obj of dataArr) {
    try {
      let sql = `select * from demo.actionitem_priority where priorityid=${obj.priority}`;
      priority = await runQuery(sql);
      priority.forEach(function (value) {
        console.log("value", value.id);
        priorityObj.id = value.id;
        priorityObj.priorityid = value.priorityid;
        priorityObj.priority = value.priority;
      });
    } catch (error) {
      console.log(error);
    }
  }

  for (const obj of dataArr) {
    try {
      let sql = `select * from demo.actionitem_urgency where urgencyid=${obj.urgency}`;
      urgency = await runQuery(sql);
      urgency.forEach(function (value) {
        console.log("value", value.id);
        urgencyObj.id = value.id;
        urgencyObj.priorityid = value.urgencyid;
        urgencyObj.priority = value.urgency;
      });
    } catch (error) {
      console.log(error);
    }
  }

  for (const obj of dataArr) {
    try {
      let sql = `select * from demo.actionitem_impact where impactid=${obj.impact}`;
      impect = await runQuery(sql);
      impect.forEach(function (value) {
        console.log("value", value.id);
        impectObj.id = value.id;
        impectObj.priorityid = value.impactid;
        impectObj.priority = value.impact;
      });
    } catch (error) {
      console.log(error);
    }
  }

  data.map(function (item) {
    item.performerList = performerArray;
    item.priority = priorityObj;
    item.urgency = urgencyObj;
    item.impact = impectObj;
  });

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
  res.send(data1);
});

app.get("/search", async (req, res) => {
  let limit = req.query.limit || 2;
  let page = req.query.page || 1;
  let offset = (page - 1) * limit;
  let sql;
  const conditions = [];
  const values = [];
  let actionitemid = req.query.actionitemid;
  let actionitemcode = req.query.actionitemcode;
  let priority = req.query.priority;
  let dir = req.query.dir;
  if (actionitemid) {
    conditions.push(`actionitemid=?`);
    values.push(actionitemid);
  }
  if (actionitemcode) {
    conditions.push("actionitemcode=?");
    values.push(actionitemcode);
  }
  if (priority) {
    conditions.push("priority=?");
    values.push(priority);
  }
  if (limit && page) {
    sql =
      `select * from demo.actionitems` +
      ` order by actionitemid ${dir} limit ${limit} offset ${offset} `;
    console.log("sql", sql);
  }
  //  sql =
  //   "select * from demo.actionitems" +
  //   (conditions.length ? " WHERE " + conditions.join(" AND ") : "");
  let data = await runQuery(sql, values);
  let data1 = {
    totalPages: data.length,
    currentPage: page,
    data,
  };
  res.send(data1);
});

app.listen(9000, () => console.log("server is running on port 9000"));
