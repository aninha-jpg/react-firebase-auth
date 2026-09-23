import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBw0rdkJA9LFzld1KnqVUkk-PFUoayy8Bk",
  authDomain: "app-react-tecnologias-web.firebaseapp.com",
  projectId: "app-react-tecnologias-web",
  storageBucket: "app-react-tecnologias-web.firebasestorage.app",
  messagingSenderId: "335403027836",
  appId: "1:335403027836:web:20ad76d54aee1d881ca8f9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
