const { addUser } = require('./userController');

async function main() {
  try {
    // Liste des utilisateurs à ajouter
    const users = [
      {
        id: 1,
        urlPhoto: 'dorcas_kibinda.jpg',
        fullName: 'Dorcas Kibinda',
        city: 'Congo-Brazzaville',
        details: 'La reine de l\'Afrique Centrale',
      },
      {
        id: 2,
        urlPhoto: 'mariame_diarra.jpg',
        fullName: 'Mariame Diarra',
        city: 'Guinée',
        details: 'L\'étoile de la Guinée',
      },
      {
        id: 3,
        urlPhoto: 'maguith_nyandiel.jpg',
        fullName: 'Maguith Nyandiel',
        city: 'Soudan du Sud',
        details: 'La beauté du Nil',
      },
      {
        id: 4,
        urlPhoto: 'guinilda_quaresma.jpg',
        fullName: 'Guinilda Quaresma Da Costa Menezes',
        city: 'Sao Tomé',
        details: 'L\'éclat des îles',
      },
      {
        id: 5,
        urlPhoto: 'benedicte_bakandi.jpg',
        fullName: 'Benedicte Bakandi',
        city: 'Tchad',
        details: 'La beauté du Nil',
      },
      {
        id: 6,
        urlPhoto: 'elisabelle_tiehi.jpg',
        fullName: 'Elisabelle Tiehi',
        city: 'Côte d\'Ivoire',
        details: 'La perle de l\'Afrique de l\'Ouest',
      },
      {
        id: 7,
        urlPhoto: 'aurelia_monteiro.jpg',
        fullName: 'Aurelia Monteiro',
        city: 'République Centrafricaine',
        details: 'Le joyau de l\'Afrique',
      },
      {
        id: 8,
        urlPhoto: 'eugenie_lafortune.jpg',
        fullName: 'Eugenie Lafortune Lobe',
        city: 'Cameroun',
        details: 'La fleur du Sahel',
      },
      {
        id: 9,
        urlPhoto: 'awa_toure.jpg',
        fullName: 'Awa Touré',
        city: 'Mali',
        details: 'La grâce du désert',
      },
      {
        id: 10,
        urlPhoto: 'marie_therese_diatta.jpg',
        fullName: 'Marie Thérèse Diatta',
        city: 'Sénégal',
        details: 'La fierté du Sénégal',
      },
      {
        id: 11,
        urlPhoto: 'rayan_ahmed_moussa.jpg',
        fullName: 'Rayan Ahmed Moussa',
        city: 'Djibouti',
        details: 'La perle de la Corne de l\'Afrique',
      },
      {
        id: 12,
        urlPhoto: 'dorcas_moira_saphou.jpg',
        fullName: 'Dorcas Moïra Saphou',
        city: 'Gabon',
        details: 'La splendeur de l\'Équateur',
      },
    ];

    // Boucle pour ajouter chaque utilisateur
    for (const userData of users) {
      const newUser = await addUser(userData);
      console.log('Utilisateur ajouté avec succès :', newUser);
    }
  } catch (error) {
    console.error('Erreur lors de l\'ajout des utilisateurs :', error);
  }
}

main();
