// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq5zizgdTVZkTzX-y-FxslgzwXtLqRGxg",
  authDomain: "fmsdatabase-72629.firebaseapp.com",
  projectId: "fmsdatabase-72629",
  storageBucket: "fmsdatabase-72629.appspot.com", // ".app" se ".com" kar diya
  messagingSenderId: "169682108081",
  appId: "1:169682108081:web:7eba6d588194562c1f2c90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
