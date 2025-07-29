import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM95hDszpeEzIsWElZwTeH9qEDCpzMPP0",
  authDomain: "heart-care-46b7c.firebaseapp.com",
  projectId: "heart-care-46b7c",
  storageBucket: "heart-care-46b7c.appspot.com",
  messagingSenderId: "1056011159365",
  appId: "1:1056011159365:web:7a3fad64e95e532c44a02c",
  measurementId: "G-D99K95WZJQ"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
