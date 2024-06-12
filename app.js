// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const { addUser } = require('./userController');


const app = express();
try {
  mongoose.connect("mongodb+srv://christiantukundastocklin:Stocklin15@mydata.hhgtpph.mongodb.net/?retryWrites=true&w=majority&appName=myData", { useNewUrlParser: true, useUnifiedTopology: true });
console.log('Connected to MongoDB');
} catch (error) {
  console.log('Error connecting to MongoDB:', error);
}

app.use(cors());
app.use(bodyParser.json());



// // Fonction pour ajouter les utilisateurs
// async function addUsers() {
//   try {
//     await addUser(1, 'imageCandidate1', 'Aïssata Koné', "Miss Côte d'Ivoire", "La perle d'Afrique de l'Ouest");
//     await addUser(2, 'imageCandidate2', 'Esther Ngoma', 'Miss Gabon', "La splendeur de l'Équateur");
//     await addUser(3, 'imageCandidate3', 'Nathalie Ndjok', 'Miss Cameroun', "La fleur du Sahel");
//     await addUser(4, 'imageCandidate4', 'Fatoumata Diarra', 'Miss Mali', "La grâce du désert");
//     await addUser(5, 'imageCandidate5', 'Mariam El Tayeb', 'Miss Soudan', "La beauté du Nil");
//     await addUser(6, 'imageCandidate6', 'Claudia Mbemba', 'Miss Congo-Brazzaville', "La reine de l'Afrique centrale");
//     await addUser(7, 'imageCandidate7', 'Aurelia Monteiro', 'Miss Sao Tomé-et-Principe', "L'éclat des îles");
//     await addUser(8, 'imageCandidate8', 'Awa Ndiaye', 'Miss Sénégal', "La fierté du Sénégal");
//     await addUser(9, 'imageCandidate9', 'Nadine Touadera', 'Miss République centrafricaine', "Le joyau de l'Afrique");
//     await addUser(10, 'imageCandidate10', 'Fanta Camara', 'Miss Guinée', "L'étoile de la Guinée");
//     await addUser(11, 'imageCandidate11', 'Hibo Ahmed', 'Miss Djibouti', "La perle de la Corne de l'Afrique");
//     console.log('Utilisateurs ajoutés avec succès');

//     // Ajouter le délai d'attente après l'ajout des utilisateurs
//     console.log('Délai d\'attente augmenté à 20 secondes avant la sauvegarde des utilisateurs...');
//     setTimeout(async () => {
//       // Mettre en attente l'exécution du code pendant 20 secondes avant d'appeler la fonction save
//       console.log('Sauvegarde des utilisateurs...');
//       // Pas besoin de `User.save()` car `addUser()` effectue déjà la sauvegarde
//       console.log('Délai d\'attente de sauvegarde des utilisateurs écoulé.');
//     }, 20000);
//   } catch (error) {
//     console.error('Erreur lors de l\'ajout des utilisateurs :', error);
//   }
// }
// addUsers()

// Routes
const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

const voteRoutes = require('./routes/votes');
app.use('/votes', voteRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
