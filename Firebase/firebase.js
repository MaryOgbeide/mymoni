// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseApiKey } from "../secrets/apikey";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "mymoni-55c52.firebaseapp.com",
  projectId: "mymoni-55c52",
  storageBucket: "mymoni-55c52.appspot.com",
  messagingSenderId: "234502226152",
  appId: "1:234502226152:web:15b632f793d97699fec95d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const authentication = getAuth(app);
export {db,authentication} 
