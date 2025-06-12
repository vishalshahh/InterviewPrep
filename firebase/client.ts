import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-AyTEsTjBC_r6i86AC4HzEPgxr6a7CYY",
  authDomain: "interviewprep-25202.firebaseapp.com",
  projectId: "interviewprep-25202",
  storageBucket: "interviewprep-25202.firebasestorage.app",
  messagingSenderId: "510685160053",
  appId: "1:510685160053:web:661e4906faade728c44e3c",
  measurementId: "G-VN6BRY3M3Y",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
