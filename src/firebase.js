// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwIJ1kuY_iazOFAe0RBAmPTp3BR4zQ6PE",
  authDomain: "briz-osteo-website-project.firebaseapp.com",
  projectId: "briz-osteo-website-project",
  storageBucket: "briz-osteo-website-project.appspot.com",
  messagingSenderId: "946795033138",
  appId: "1:946795033138:web:eabaee36110555df27c22b",
  measurementId: "G-E90SCKHBTL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();


