const axios = require('axios'); // Assurez-vous d'installer Axios si vous l'utilisez

async function automatisation() {
    try {
        // Remplacez 'http://localhost:3000/api' par l'URL de votre API
        const response = await axios.get('http://localhost:3000/api');
        console.log('Données récupérées de l\'API :', response.data);
        
        // Ajoutez ici d'autres actions automatiques que vous souhaitez effectuer
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
    }
}

// Exécute la fonction d'automatisation
automatisation();
