import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCtZarykV8W9BeQtD7V4lwIDb2kx3EVY70",
  authDomain: "portfolio-3869f.firebaseapp.com",
  projectId: "portfolio-3869f",
  storageBucket: "portfolio-3869f.firebasestorage.app",
  // THIS LINE IS THE KEY FOR SINGAPORE SERVERS:
  databaseURL: "https://portfolio-3869f-default-rtdb.firebaseio.com/",

  messagingSenderId: "756281474423",
  appId: "1:756281474423:web:6d6bbc157f78fa3ebe3572"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);