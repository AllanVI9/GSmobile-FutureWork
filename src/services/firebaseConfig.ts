import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyChPs2Huk1y2McIo6nXOA85PHhIeb43m-A",
  authDomain: "gsfuturework.firebaseapp.com",
  databaseURL: "https://gsfuturework-default-rtdb.firebaseio.com",
  projectId: "gsfuturework",
  storageBucket: "gsfuturework.firebasestorage.app",
  messagingSenderId: "1074899034226",
  appId: "1:1074899034226:web:da9269ea3a4ea5ec19a2eb",
  measurementId: "G-953G8DNC5V",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
