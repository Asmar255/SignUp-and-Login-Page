import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjmnQKlrkga7UC0gPkWUFKTarB5fX4uaI",
  authDomain: "signup-and-login-app-49dc9.firebaseapp.com",
  projectId: "signup-and-login-app-49dc9",
  storageBucket: "signup-and-login-app-49dc9.firebasestorage.app",
  messagingSenderId: "199493187305",
  appId: "1:199493187305:web:ad263146584720f2e5e278",
  measurementId: "G-FE31NKW9S0"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);