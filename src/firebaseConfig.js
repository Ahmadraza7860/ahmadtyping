import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCONSYbUFGbzL14VYja9AXMs1cofbr8TME",
  authDomain: "typing-website-b61d8.firebaseapp.com",
  databaseURL: "https://typing-website-b61d8-default-rtdb.firebaseio.com",
  projectId: "typing-website-b61d8",
  storageBucket: "typing-website-b61d8.appspot.com",
  messagingSenderId: "327112175204",
  appId: "1:327112175204:web:69e7178c8729cf4a45f971",
  measurementId: "G-5JL7LGY9F0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export {auth, db}; 