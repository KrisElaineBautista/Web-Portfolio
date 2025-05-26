// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCYUR50nALBMxzNnfeM1yYglsNjhdgI6yc",
  authDomain: "portfolioweb-14f46.firebaseapp.com",
  projectId: "portfolioweb-14f46",
  storageBucket: "portfolioweb-14f46.appspot.com",
  messagingSenderId: "768911407193",
  appId: "1:768911407193:web:0d14a844bcae1bfacb9948",
  measurementId: "G-5V7Y42E04G",
  databaseURL: "https://portfolioweb-14f46-default-rtdb.firebaseio.com/", // ✅ important
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
