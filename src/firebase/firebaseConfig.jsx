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
  apiKey: "AIzaSyBGMoH0MTALTZ7xPMON-EFdfuJnznA33DI",
  authDomain: "blog-4e5ff.firebaseapp.com",
  projectId: "blog-4e5ff",
  storageBucket: "blog-4e5ff.appspot.com",
  messagingSenderId: "1014212089464",
  appId: "1:1014212089464:web:988424c4ad2aa4e9f4bf8d",
  measurementId: "G-D9192JDJ53"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const auth = getAuth(app);

export { db, auth }