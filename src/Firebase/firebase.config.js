// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Dxplx0SI7MBWl09k2Ctmnh8U6RC2GXw",
  authDomain: "tastebud-tavern.firebaseapp.com",
  projectId: "tastebud-tavern",
  storageBucket: "tastebud-tavern.appspot.com",
  messagingSenderId: "1098340087720",
  appId: "1:1098340087720:web:a1655ff7b1600cab6e4f9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
