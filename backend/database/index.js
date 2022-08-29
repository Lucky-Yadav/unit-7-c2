const mongoose = require("mongoose");

async function connectDatabase() {
  const dbUri = "mongodb://localhost:27017/Evaluation";

  try {
    const response = await mongoose.connect(dbUri);
    console.log("Database Connection Successful");
  } catch (err) {
    throw err;
  }
}

module.exports = connectDatabase;
