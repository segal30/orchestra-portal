import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9SmIR3FlEtSfkO5DAUPrS1aWrzy95kF0",
  authDomain: "portal-be891.firebaseapp.com",
  projectId: "portal-be891",
  storageBucket: "portal-be891.appspot.com",
  messagingSenderId: "383042794837",
  appId: "1:383042794837:web:7625bfb8d1a13af07a6bdc",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
