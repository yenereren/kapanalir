const admin = require('firebase-admin');
const {userFunction} = require('../middlewares/userFunction');

module.exports = userFunction((data, context) => {  
  return new Promise(async (resolve, reject) => {
    const game = {
      users: [],
      propertySets: [],
      currentUser: '',
    };

    const result = await admin.firestore().collection('games').add(game);

    resolve({ id: result.id });
  });
});