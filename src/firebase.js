// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCut8HaFAZCEZCuprZLjgmjawP8mRMTHwQ",
  authDomain: "weather-665b2.firebaseapp.com",
  projectId: "weather-665b2",
  storageBucket: "weather-665b2.appspot.com",
  messagingSenderId: "983656561659",
  appId: "1:983656561659:web:5c004101257af49fb7a95e",
  measurementId: "G-YWSVFP0XLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export  {database};