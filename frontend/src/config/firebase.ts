import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCV5sc5gKlk8JjhKHASI2dbd2Onrduz39s",
  authDomain: "siren-store-ea364.firebaseapp.com",
  projectId: "siren-store-ea364",
  storageBucket: "siren-store-ea364.firebasestorage.app",
  messagingSenderId: "34320866251",
  appId: "1:34320866251:web:00f61c7f72b969ace9f44e",
  measurementId: "G-B2SPZ3RRW2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);