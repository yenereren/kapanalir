const functions = require('firebase-functions');
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
const propertySets = require('./resources/property-sets.json')
const gameCreate = require('./game/create');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://kapanalir-b961e.firebaseio.com"
  });

exports.helloWorld = functions.https.onCall((data, context) => {
 return 'Hello from Firebase!';
});


exports.gameCreate = gameCreate;