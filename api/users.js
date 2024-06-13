// api/users.js
const connectToDatabase = require('../utils/db');
const User = require('../models/User');

module.exports = async (req, res) => {
  await connectToDatabase(process.env.MONGODB_URI);

  if (req.method === 'GET') {
    const users = await User.find();
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
