// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM95hDszpeEzIsWElZwTeH9qEDCpzMPP0",
  authDomain: "heart-care-46b7c.firebaseapp.com",
  projectId: "heart-care-46b7c",
  storageBucket: "heart-care-46b7c.firebasestorage.app",
  messagingSenderId: "1056011159365",
  appId: "1:1056011159365:web:7a3fad64e95e532c44a02c",
  measurementId: "G-D99K95WZJQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);