// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrkYA1UkhmUbD4Q8_5O_Ct_8IsQa_ukaQ",
  authDomain: "coffee-store-app-f528f.firebaseapp.com",
  projectId: "coffee-store-app-f528f",
  storageBucket: "coffee-store-app-f528f.firebasestorage.app",
  messagingSenderId: "12912953422",
  appId: "1:12912953422:web:67825cbfc0213abfbb1b1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);