// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNrL69pH1G7WMq3H82Z29SqvZrv6VMvPY",
  authDomain: "cchat-da7a6.firebaseapp.com",
  projectId: "cchat-da7a6",
  storageBucket: "cchat-da7a6.appspot.com",
  messagingSenderId: "326845015947",
  appId: "1:326845015947:web:c846031138c9763c60318e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
