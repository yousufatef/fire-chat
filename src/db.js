import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const config = {
  apiKey: "AIzaSyCjCz2KrLOVfT7fqPhBDpIY-4n12Ad7lcE",
  authDomain: "fire-chat-647e9.firebaseapp.com",
  projectId: "fire-chat-647e9",
  storageBucket: "fire-chat-647e9.appspot.com",
  messagingSenderId: "506094471417",
  appId: "1:506094471417:web:e63e413728dcba026afa28",
  databaseURL: "https://fire-chat-647e9-default-rtdb.firebaseio.com/", // Ensure this is included
};

// Initialize Firebase
const app = initializeApp(config);

// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);

export default db;
