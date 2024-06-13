const express = require('express');
const bodyParser = require('body-parser');
const connectToDatabase = require('./utils/db');
const userRoutes = require('./api/users');
const paymentRoutes = require('./api/payments');
const userApi = require('./api/users');
const voteApi = require('./api/vote');
const successApi = require('./api/success');
require('dotenv').config();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Définir les options CORS avec des origines spécifiques autorisées
const corsOptions = {
  origin: 'http://localhost:3000', // Seule cette origine est autorisée
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 200 // Certaines anciennes navigateurs (IE11, divers SmartTVs) ne fonctionnent pas avec le statut 204
};

// Utilisation de bodyParser pour analyser les corps de requête en JSON
app.use(bodyParser.json());

// Utilisation de CORS avec les options définies
app.use(cors(corsOptions));

// Connectez-vous à la base de données MongoDB
connectToDatabase(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Routes API
app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoutes);

// Autres routes spécifiques
app.use('/users', userApi);
app.use('/vote', voteApi);
app.use('/success', successApi);

// Servir les fichiers statiques depuis le dossier 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Route pour toutes les autres requêtes GET, renvoyant index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
