// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2xyYn0RzBrJrye0OBWSateVkcxbVps7o",
  authDomain: "prepwise-e0d52.firebaseapp.com",
  projectId: "prepwise-e0d52",
  storageBucket: "prepwise-e0d52.firebasestorage.app",
  messagingSenderId: "550524586255",
  appId: "1:550524586255:web:a3f1d94c2a5fd2db24967a",
  measurementId: "G-GVL0K1KHTE"
};

// Initialize Firebase
const app = !getApps.length ?  initializeApp(firebaseConfig) : getApp() ;


export const auth = getAuth(app);
export const db = getFirestore(app);