const { addUser } = require('./controllers/userController');

async function main() {
  try {
    // Les détails de l'utilisateur à ajouter
    const userData = {
      id: 1,
      urlPhoto: 'image1.jpg',
      fullName: 'Jane Doe',
      city: 'Paris',
      details: 'Lorem ipsum dolor sit amet.'
    };

    // Appel de la fonction addUser pour ajouter l'utilisateur
    const newUser = await addUser(userData);
    console.log('Utilisateur ajouté avec succès :', newUser);
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
  }
}

main();
