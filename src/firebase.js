import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAc3hhHTq4DrS7owUx1emTJMh9rXI2Gtww",
  authDomain: "react-disney-plus-app-904ed.firebaseapp.com",
  projectId: "react-disney-plus-app-904ed",
  storageBucket: "react-disney-plus-app-904ed.appspot.com",
  messagingSenderId: "34492028086",
  appId: "1:34492028086:web:636bc35870d4d83373c217",
  measurementId: "G-PHHKJWK4T8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
