// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjmnQKlrkga7UC0gPkWUFKTarB5fX4uaI",
  authDomain: "signup-and-login-app-49dc9.firebaseapp.com",
  projectId: "signup-and-login-app-49dc9",
  storageBucket: "signup-and-login-app-49dc9.firebasestorage.app",
  messagingSenderId: "199493187305",
  appId: "1:199493187305:web:ad263146584720f2e5e278",
  measurementId: "G-FE31NKW9S0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);