const express = require("express");
const { GetNotes, register, login } = require("../handlers/userdata");

const UserData = express.Router();

UserData.get("/", (req, res) => res.send("response successfull"));
UserData.post("/signUp", register);
UserData.post("/login", login);

module.exports = UserData;
