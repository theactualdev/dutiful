// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASlfugLvOhMcS8_1rmg10txwOeMXnMRJ4",
  authDomain: "dutiful-f4050.firebaseapp.com",
  projectId: "dutiful-f4050",
  storageBucket: "dutiful-f4050.appspot.com",
  messagingSenderId: "913311151992",
  appId: "1:913311151992:web:57b14212ec0eda0f4a7a8d",
  measurementId: "G-9PQ5ZN4BM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, auth, db };