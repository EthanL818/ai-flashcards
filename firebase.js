// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "flashcards-saas-574be.firebaseapp.com",
  projectId: "flashcards-saas-574be",
  storageBucket: "flashcards-saas-574be.appspot.com",
  messagingSenderId: "397893656198",
  appId: "1:397893656198:web:47356c658836d595d3bb07",
  measurementId: "G-02160BS3W8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
