// userController.js
const User = require('./models/User');

const addUser = async (id, urlPhoto, fullName, city, details) => {
  try {
    const newUser = new User({ id, urlPhoto,fullName, city, details });
    const user = await newUser.save();
    console.log('Utilisateur ajouté avec succès :', user);
    return user;
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
    throw error;
  }
};

module.exports = {
  addUser
};
