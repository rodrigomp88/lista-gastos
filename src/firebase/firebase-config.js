import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDO,
  projectId: process.env.REACT_APP_FIREBASE_PROJEC,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAG,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAG,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
