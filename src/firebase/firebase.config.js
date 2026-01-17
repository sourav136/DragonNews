// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDagPmm2ijMCsH8yKOsDoQzuu9ApijOl9A",
  authDomain: "dragonnews-63e9b.firebaseapp.com",
  projectId: "dragonnews-63e9b",
  storageBucket: "dragonnews-63e9b.firebasestorage.app",
  messagingSenderId: "782162414134",
  appId: "1:782162414134:web:a39b868644665c9dcd6697"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);