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

 Date: 16/11/2020 10:35:33
*/


// ----------------------------
// Collection structure for comments
// ----------------------------
db.getCollection("comments").drop();
db.createCollection("comments");

// ----------------------------
// Documents of comments
// ----------------------------
db.getCollection("comments").insert([ {
    _id: ObjectId("5f9c7da39c2771d443e1f955"),
    videoId: "5f9c763b95981ed151a37e20",
    userToken: null,
    comment: "awwww they are adorable!",
    time: ISODate("2020-10-30T20:54:59.56Z")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5f9f1e04ed47da4545ce2239"),
    videoId: "5f9c763b95981ed151a37e20",
    userToken: null,
    comment: "lol",
    time: ISODate("2020-11-01T20:43:48.945Z")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5f9f233d03f76d578bf140dd"),
    videoId: "5f9c763b95981ed151a37e20",
    userToken: null,
    comment: "cute cat!I love Petube!",
    time: ISODate("2020-11-01T21:06:05.161Z")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5f9f88f1c9429866a7c549e2"),
    videoId: "5f9dff869c622c6c878c2d59",
    userToken: null,
    comment: "lol",
    time: ISODate("2020-11-02T04:20:01.745Z")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5fa0a8a8bd56a6146e78c3bf"),
    videoId: "5f9e1eef61cfa35f918a2257",
    userToken: null,
    comment: "sa",
    time: ISODate("2020-11-03T00:47:36.742Z")
} ]);
db.getCollection("comments").insert([ {
    _id: ObjectId("5fb071b9c22986bc944d28a0"),
    videoId: "5f9c763b95981ed151a37e20",
    userToken: null,
    comment: "I like them!",
    time: ISODate("2020-11-15T00:09:29.986Z")
} ]);
