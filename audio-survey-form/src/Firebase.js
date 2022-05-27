import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtfieRXWvOTlg2j40mTl6cW9JYedPx-xk",
  authDomain: "audio-survey.firebaseapp.com",
  projectId: "audio-survey",
  storageBucket: "audio-survey.appspot.com",
  messagingSenderId: "319919069714",
  appId: "1:319919069714:web:5c9059e917e196fe0056cb",
  measurementId: "G-303J5JDYQZ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
