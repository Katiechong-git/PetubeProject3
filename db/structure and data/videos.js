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

 Date: 16/11/2020 10:36:31
*/


// ----------------------------
// Collection structure for videos
// ----------------------------
db.getCollection("videos").drop();
db.createCollection("videos");

// ----------------------------
// Documents of videos
// ----------------------------
db.getCollection("videos").insert([ {
    _id: ObjectId("5f9c763b95981ed151a37e20"),
    name: "100 days of Ragdoll Kittens in 8 minutes [ENG SUB]",
    url: "https://www.youtube.com/embed/Q-IaI7mvAT4",
    votes: NumberInt("27")
} ]);
db.getCollection("videos").insert([ {
    _id: ObjectId("5f9dff869c622c6c878c2d59"),
    name: "Panda cubs and nanny Mei’s war Ⅱ",
    url: "https://www.youtube.com/embed/I-ovzUNno7g",
    votes: NumberInt("3")
} ]);
db.getCollection("videos").insert([ {
    _id: ObjectId("5f9e15f7f5875bc4feb451c6"),
    name: "Cat VS Lobster| Seeing Lobaster for the first time",
    url: "https://www.youtube.com/embed/OUTNDbRGX1s",
    votes: NumberInt("7")
} ]);
db.getCollection("videos").insert([ {
    _id: ObjectId("5f9e1eef61cfa35f918a2257"),
    name: "Smallest dog in the world",
    url: "https://www.youtube.com/embed/Jqb5zFexlCc",
    votes: NumberInt("2")
} ]);
