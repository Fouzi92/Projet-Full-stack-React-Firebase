// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const app = (firebase.initializeApp = {
  apiKey: "AIzaSyCuPGTykapPDSqm5jFsx63HNHMKEY5TfgQ",
  authDomain: "react-firebase-b46ad.firebaseapp.com",
  projectId: "react-firebase-b46ad",
  storageBucket: "react-firebase-b46ad.appspot.com",
  messagingSenderId: "573516385339",
  appId: "1:573516385339:web:10b5afb6c3576306cfa01e",
});

// Initialize Firebase
export const auth = app.auth();
export default app;
