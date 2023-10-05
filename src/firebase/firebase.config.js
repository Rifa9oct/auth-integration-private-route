// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChv4EwiubVp0XJmSQyJuFkeDxNlgWsODM",
  authDomain: "auth-integration-privateroute.firebaseapp.com",
  projectId: "auth-integration-privateroute",
  storageBucket: "auth-integration-privateroute.appspot.com",
  messagingSenderId: "419435258078",
  appId: "1:419435258078:web:2c9efd4c170577b1ada24f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;