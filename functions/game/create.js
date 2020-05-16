const functions = require('firebase-functions');
const admin = require('firebase-admin');

module.exports = functions.https.onRequest(async (request, response) => {    
    
    const game = {
        users:[],
        propertySets:[],
        currentUser:""
    }

    const result = await admin.firestore().collection("games").add(game);

    response.send(result.id);
});