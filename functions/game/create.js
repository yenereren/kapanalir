const functions = require('firebase-functions');
const admin = require('firebase-admin');

module.exports = functions.https.onCall((data, context) => {  
  return new Promise(async (resolve, reject) => {
    if (!context.auth) {
      reject(new functions.https.HttpsError('unauthenticated'));
    }

    const game = {
      users: [],
      propertySets: [],
      currentUser: '',
    };

    const result = await admin.firestore().collection('games').add(game);

    resolve({ id: result.id });
  });
});