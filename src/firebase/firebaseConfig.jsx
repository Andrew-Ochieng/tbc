// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLfvLLEtqJXgeCcxKxrSWchmg0orORDWU",
  authDomain: "tbc-blog-d3cb6.firebaseapp.com",
  projectId: "tbc-blog-d3cb6",
  storageBucket: "tbc-blog-d3cb6.appspot.com",
  messagingSenderId: "1052584444823",
  appId: "1:1052584444823:web:08606010e08858b6a33ad2",
  measurementId: "G-6SQ4NL2BL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = getAuth(app);

export { db, auth }