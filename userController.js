// userController.js
const User = require('./models/User');

const addUser = async ({ id, urlPhoto, fullName, city, details }) => {
  try {
    const newUser = new User({ id, urlPhoto, fullName, city, details });
    const user = await newUser.save();
    return user;
  } catch (error) {
    throw new Error('Erreur lors de l\'ajout de l\'utilisateur : ' + error.message);
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des utilisateurs : ' + error.message);
  }
};

module.exports = {
  addUser,
  getAllUsers,
};
