// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbxdMmoM9GIvESGwx4t4KUXfipsq9TPds",
  authDomain: "audiophile-react.firebaseapp.com",
  projectId: "audiophile-react",
  storageBucket: "audiophile-react.appspot.com",
  messagingSenderId: "63055092988",
  appId: "1:63055092988:web:8a4ba96322bda1d2058b79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
