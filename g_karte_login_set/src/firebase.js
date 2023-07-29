import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgNzXysTjIqHZhl1XgV15fE06jbdPq6Y0",
  authDomain: "g-karte-8adb0.firebaseapp.com",
  projectId: "g-karte-8adb0",
  storageBucket: "g-karte-8adb0.appspot.com",
  messagingSenderId: "362148265688",
  appId: "1:362148265688:web:3024f7660419cb2d6a21ad",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
