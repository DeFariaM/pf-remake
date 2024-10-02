// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuUZC41H3oSJAkDpLrcad_NVncYTN8COU",
  authDomain: "pf-remake.firebaseapp.com",
  projectId: "pf-remake",
  storageBucket: "pf-remake.appspot.com",
  messagingSenderId: "49698685143",
  appId: "1:49698685143:web:2d9c43d92cc64c260ef092",
  measurementId: "G-VBMJJJE5JN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics =
  typeof window !== "undefined" && isSupported() ? getAnalytics() : null;
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
