// utils/db.js
const mongoose = require('mongoose');

let cachedDb = null;
// const uri = "mongodb+srv://christiantukundastocklin:Stocklin15@mydata.hhgtpph.mongodb.net/?retryWrites=true&w=majority&appName=myData";

async function connectToDatabase(uri) {
  if (cachedDb) {
    return cachedDb;
  }

  const opts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  const db = await mongoose.connect(uri, opts);
  cachedDb = db;
  return db;
}

module.exports = connectToDatabase;
