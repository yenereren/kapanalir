const admin = require('firebase-admin');
const {userFunction} = require('../middlewares/userFunction');

module.exports = userFunction((data, context) => {  
  return new Promise(async (resolve, reject) => {
    const user = {
        id: context.auth.uid,
        position: 0,
        picture: context.auth.token.picture
    };

    const game = {
      users: [user],
      propertySets: [],
      currentUser: '',
    };

    const result = await admin.firestore().collection('games').add(game);

    resolve({ id: result.id });
  });
});