//import { initializeApp } from "firebase/app";
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//const db = getFirestore(app);
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsUdYvnBIdB0JmzFzNki4jDVeOgtw_yNg",
  authDomain: "fipugram-1b08c.firebaseapp.com",
  projectId: "fipugram-1b08c",
  storageBucket: "fipugram-1b08c.appspot.com",
  messagingSenderId: "312614484015",
  appId: "1:312614484015:web:c24dddb6c57a17d05caeda"
};

//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export {
    firebase, db // kljuc firebase vrijednost firebase
}