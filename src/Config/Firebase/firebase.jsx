
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjg9lgsN1LoLFNMZgjPUK95TzeFlpFZVI",
  authDomain: "react-hacathoke.firebaseapp.com",
  databaseURL: "https://react-hacathoke-default-rtdb.firebaseio.com",
  projectId: "react-hacathoke",
  storageBucket: "react-hacathoke.appspot.com",
  messagingSenderId: "396341268316",
  appId: "1:396341268316:web:a697866d6037bffb8b3b99"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);
const database = getDatabase(firebase_app);


export {firebase_app,auth,database}