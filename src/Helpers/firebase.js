import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth";

  var firebaseConfig = {
    apiKey: "AIzaSyCuhBxrWU0hjMEVbKWC4_MfxnFxzfjjgKI",
    authDomain: "rrenacia-7c163.firebaseapp.com",
    databaseURL: "https://rrenacia-7c163.firebaseio.com",
    projectId: "rrenacia-7c163",
    storageBucket: "rrenacia-7c163.appspot.com",
    messagingSenderId: "69786215764",
    appId: "1:69786215764:web:413b16d21a241aaf6814c1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
 
  export const firebasedb = firebase.firestore();
  export const firebaseauth  = firebase.auth();
  export const firebaseuser = firebase.user;