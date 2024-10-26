// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb2BUSH34eVkuYmeaEBxUjrlMO8iEgFpI",
  authDomain: "pra-fazer-app-dab65.firebaseapp.com",
  projectId: "pra-fazer-app-dab65",
  storageBucket: "pra-fazer-app-dab65.appspot.com",
  messagingSenderId: "757179841789",
  appId: "1:757179841789:web:7fc9ba1fb7d83f09da9294"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export {auth, db};
