const express = require("express");
const router = express.Router();
const mongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const bodyParser = require("body-parser");
require("dotenv").config();
const url = process.env.MONGODB_URI || require("../db/mongoDetails.js");

let db;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoClient.connect(url, { useUnifiedTopology: true }, function (
  error,
  client
) {
  if(error) {
    console.error(error);
    return;
  } else {
    console.log("database connection success");
    db = client.db("posts");
  }
  assert.equal(error, null);
});

router.post("/register", urlencodedParser, function (request, response) {
  const data = request.body.data;
  console.log(data);
  db.collection("users").findOne({ username: data.username }, function (
    error,
    result
  ) {
    if (result != null) {
      response.status(409).send("User already exists.");
    } else {
      db.collection("users").insertOne(
        { username: data.username, password: data.password },
        function (error, result) {
          response.send(result);
        }
      );
    }
  });
});

router.post("/authenticate", urlencodedParser, function (request, response) {
  const data = request.body.data;
  if(!db) {
    return response.json({message: "数据库正在连接，请稍等"});
  }
  db.collection("users").findOne({ username: data.userName }, function (
    error,
    result
  ) {
    if (result === null || result.password != data.password) {
      return response.status(401).send("Username or Password not correct.");
      response.send({ match: false });
    } else {
      response.status(200);
      response.send({ match: true });
    }
  });
});

module.exports = router;
// const express = require("express");
// const router = express.Router();

// const userDB = require("../db/userMongoDB.js");

// router.post("/register", async (req, res) => {
//   const data = req.body;
//   console.log("data is", data);
//   await userDB.createUser(data);
//   res.redirect("/");
// });

// router.post("/login", function (req, res) {
//   const data = req.body;
//   const result = userDB.loginUser(data);
//   print(result);
//   if (result === null || result.password != data.password) {
//     res.status(401).send("Username or Password not correct.");
//   } else {
//     res.send(result);
//   }
// });
// module.exports = router;
