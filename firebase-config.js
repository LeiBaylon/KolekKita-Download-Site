// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBykssYUD_2uixQLPpaFVLrEGuexfpFdoY",
  authDomain: "kolekkita-9216f.firebaseapp.com",
  projectId: "kolekkita-9216f",
  storageBucket: "kolekkita-9216f.firebasestorage.app",
  messagingSenderId: "309777304372",
  appId: "1:309777304372:web:034a6813e78834339ef361",
  measurementId: "G-7P8GF98WLE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
