import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth";

  var firebaseConfig = {
     //COPY PASTE YOUR CONFIG FROM FIREBASE CONSOLE, FOR WEB.
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
 
  export const firebasedb = firebase.firestore();
  export const firebaseauth  = firebase.auth();
  export const firebaseuser = firebase.user;