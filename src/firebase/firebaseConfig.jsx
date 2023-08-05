// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore"
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MSG_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   measurementId: import.meta.env.VITE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyCLfvLLEtqJXgeCcxKxrSWchmg0orORDWU",
  authDomain: "tbc-blog-d3cb6.firebaseapp.com",
  databaseURL: "https://tbc-blog-d3cb6-default-rtdb.firebaseio.com",
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