// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  {
    _id: Number,
    name: String,
    surname: String
  }, { collection : 'userList'});

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("users", DataSchema);