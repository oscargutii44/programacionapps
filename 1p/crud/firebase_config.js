// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb6Qm9OK8FMMHFAKq6QoC7Ni-p3yS2LJ0",
  authDomain: "crud-apps-3f12b.firebaseapp.com",
  projectId: "crud-apps-3f12b",
  storageBucket: "crud-apps-3f12b.appspot.com",
  messagingSenderId: "191390182635",
  appId: "1:191390182635:web:a0a4868e3ab0e747ba22ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore (Database)
export  const db = getFirestore(app);