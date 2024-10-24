import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASlfugLvOhMcS8_1rmg10txwOeMXnMRJ4",
  authDomain: "dutiful-f4050.firebaseapp.com",
  projectId: "dutiful-f4050",
  storageBucket: "dutiful-f4050.appspot.com",
  messagingSenderId: "913311151992",
  appId: "1:913311151992:web:57b14212ec0eda0f4a7a8d",
  measurementId: "G-9PQ5ZN4BM5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };