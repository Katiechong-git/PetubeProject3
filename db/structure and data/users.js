/*
 Navicat Premium Data Transfer

 Source Server         : localhost_27017
 Source Server Type    : MongoDB
 Source Server Version : 40210
 Source Host           : localhost:27017
 Source Schema         : posts

 Target Server Type    : MongoDB
 Target Server Version : 40210
 File Encoding         : 65001

 Date: 16/11/2020 10:36:22
*/


// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("5f9c7d939c2771d443e1f954"),
    username: "linda",
    password: "123456"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5f9d9b687d9272872d27c4c4"),
    username: "dawd",
    password: "qwer1234"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5f9da74321d2ac934a93c8d9"),
    username: "lol",
    password: "lol"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5f9df2f5b16583155f4b020f"),
    username: "kiki",
    password: "123"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5f9e258fa77cd6198b219dc3"),
    username: "qqcom",
    password: "qq"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5fa0a87ebd56a6146e78c3bd"),
    username: "hello",
    password: "hello"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5fa0af17be38ea1e9004e351"),
    username: "dadada",
    password: "dadada"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5fab581e939b2611d8633e90"),
    username: "seven",
    password: "test"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5fab59790376b714b2a4d663"),
    username: "seven1",
    password: "test"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5fab734082ed8451356013d4"),
    username: "yaaa",
    password: "test"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5fab7d4c12fe9b523c1d1a80"),
    username: "yao123",
    password: "12345"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5fab8cc554800f53c32bc68d"),
    username: "ser",
    password: "ser"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5fae006da26cb5216a02f0d9"),
    username: "12345671",
    password: "12345671"
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5fb071e4c22986bc944d28a1"),
    username: "qiqi",
    password: "123"
} ]);
