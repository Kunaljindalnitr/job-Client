// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYrOms_dEpStlIdQ0kE0tuwOjM7CZCxEY",
  authDomain: "job-portal-4f10c.firebaseapp.com",
  projectId: "job-portal-4f10c",
  storageBucket: "job-portal-4f10c.appspot.com",
  messagingSenderId: "733117818038",
  appId: "1:733117818038:web:95add0b4a2a31ba01ff217",
  measurementId: "G-5NFQ3HTJ4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;