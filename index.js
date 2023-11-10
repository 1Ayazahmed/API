const dotenv = require("dotenv").config();
const URL = process.env.URL;

var MongoClient = require("mongodb").MongoClient;
var url = URL;

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("Student");
  dbo.createCollection("std_data", function (err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
