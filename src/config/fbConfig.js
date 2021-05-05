import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCuA7GQyD0WiZyfR9moEcrO-r4uIfevlOY",
  authDomain: "react-studnet.firebaseapp.com",
  projectId: "react-studnet",
  storageBucket: "react-studnet.appspot.com",
  messagingSenderId: "486179519310",
  appId: "1:486179519310:web:7bab5e8813d2496568fc1f",
  measurementId: "G-7JH68DC798",
});

export const db = firebase.firestore();
