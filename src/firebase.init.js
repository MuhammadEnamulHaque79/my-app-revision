// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBujALU3xQC2aWyoL1Mutz7uYgDRfR2XUU",
  authDomain: "my-app--revision.firebaseapp.com",
  projectId: "my-app--revision",
  storageBucket: "my-app--revision.appspot.com",
  messagingSenderId: "526400268579",
  appId: "1:526400268579:web:c887ab72252d3408610496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;