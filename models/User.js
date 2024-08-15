// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: Number },
  urlPhoto: String,
  fullName: String,
  city: String,
  details: String,
  points: { type: Number, default: 0 },
}, { collection: 'missAfricaMaroc2024Users' }); // Nom de collection spécifique pour Miss Africa Maroc 2024

const User = mongoose.model('User', userSchema);

module.exports = User;
