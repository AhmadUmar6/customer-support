
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDYnHH3mTG2XRb5THebWl9Ph3OueoJJHmU",
  authDomain: "customer-support-c90c8.firebaseapp.com",
  projectId: "customer-support-c90c8",
  storageBucket: "customer-support-c90c8.appspot.com",
  messagingSenderId: "50920708353",
  appId: "1:50920708353:web:4ff090fa9007e14f0c6300",
  measurementId: "G-TC3EPYHSCV"
};

// Initialize Firebase
console.log('Initializing Firebase'); // Debugging
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);