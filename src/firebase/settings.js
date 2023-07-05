// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: procces.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: procces.env.VUE_APP_AUTH_DOMAIN,
  projectId: procces.env.VUE_APP_PROJECT_ID,
  storageBucket: procces.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: procces.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: procces.env.VUE_APP_APP_ID,
  measurementId: procces.env.VUE_APP_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app);

export {auth, db}