import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA2ei0Biit543eps6CMJ3HtqKR3HH9DfGI",
  authDomain: "kapanalir-b961e.firebaseapp.com",
  databaseURL: "https://kapanalir-b961e.firebaseio.com",
  projectId: "kapanalir-b961e",
  storageBucket: "kapanalir-b961e.appspot.com",
  messagingSenderId: "755745066971",
  appId: "1:755745066971:web:efc401f7cac73bbb6c61fe",
  measurementId: "G-6EEH1PN237"
};

firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);

const functions = firebase.functions();

if(process.env.NODE_ENV !== 'production'){
  functions.useFunctionsEmulator("http://localhost:5001");
}

export const createGame = functions.httpsCallable('gameCreate');