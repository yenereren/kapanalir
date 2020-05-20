const functions = require('firebase-functions');

module.exports.userFunction = function(callback){
  return functions.https.onCall((data, context) => {
    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated');
    }

    return callback(data, context);
  });
}