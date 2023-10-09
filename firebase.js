import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGoNp7bL22BVvljmjo7qZ3MwVSZdt3tq8",
  authDomain: "medium-clone-58bba.firebaseapp.com",
  projectId: "medium-clone-58bba",
  storageBucket: "medium-clone-58bba.appspot.com",
  messagingSenderId: "437288146576",
  appId: "1:437288146576:web:54444f1b3d794746882a15",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
