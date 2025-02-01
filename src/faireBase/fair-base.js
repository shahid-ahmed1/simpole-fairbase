// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCY58mAg4TE1EXaFHe8h4XrM_YSFv5-mdg",
  authDomain: "simple-firebase-b6208.firebaseapp.com",
  projectId: "simple-firebase-b6208",
  storageBucket: "simple-firebase-b6208.firebasestorage.app",
  messagingSenderId: "109554302400",
  appId: "1:109554302400:web:9af4d581cb2a408d315c25",
  measurementId: "G-LGV5W56SPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth