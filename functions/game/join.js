const admin = require('firebase-admin');
const functions = require('firebase-functions');
const { userFunction } = require('../middlewares/userFunction');

module.exports = userFunction((data, context) => {
  return new Promise(async (resolve, reject) => {
    const user = {
      id: context.auth.uid,
      position: 0,
      picture: context.auth.token.picture,
    };

    const doc = await admin.firestore().collection('games').doc(data.gameId).get();

    if (doc.exists) {
      await doc.ref.update({
        users: admin.firestore.FieldValue.arrayUnion(user),
      });
    } else {
        reject(new functions.https.HttpsError('not-found'));
    }

    resolve();
  });
});
