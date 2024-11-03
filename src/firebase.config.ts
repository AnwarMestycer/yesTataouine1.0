// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDq765f3a2FjBcsFOjZkj6Lb5hrlbqs1LA",
  authDomain: "youthvision-9d84a.firebaseapp.com",
  projectId: "youthvision-9d84a",
  storageBucket: "youthvision-9d84a.firebasestorage.app",
  messagingSenderId: "501667667506",
  appId: "1:501667667506:web:6c3f38d572a2355454262b",
  measurementId: "G-STMSGVS8LB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app);