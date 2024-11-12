import { initializeApp } from "firebase/app";

import {getFirestore} from "@firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBnJ5z969HXPWtwM7d2-TIdSl7g2CL6NMA",
  authDomain: "devdeakin-16faa.firebaseapp.com",
  projectId: "devdeakin-16faa",
  storageBucket: "devdeakin-16faa.firebasestorage.app",
  messagingSenderId: "851133500553",
  appId: "1:851133500553:web:257a2fecc67af188d18a58",
  measurementId: "G-FRWSDWJ7L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
