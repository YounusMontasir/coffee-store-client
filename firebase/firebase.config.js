// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlrMcCzd7mUhINCTOkuh4zokJDt49vf1w",
  authDomain: "coffee-store-auth-c4927.firebaseapp.com",
  projectId: "coffee-store-auth-c4927",
  storageBucket: "coffee-store-auth-c4927.firebasestorage.app",
  messagingSenderId: "781367774879",
  appId: "1:781367774879:web:4a6c387f537271eb549caa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);