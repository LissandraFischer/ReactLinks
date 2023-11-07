
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth }  from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBk3sQ2yQTEWlwdnxIFGA8lp9gmQEdxYBs",
  authDomain: "reactlinks-b48e5.firebaseapp.com",
  projectId: "reactlinks-b48e5",
  storageBucket: "reactlinks-b48e5.appspot.com",
  messagingSenderId: "48308481852",
  appId: "1:48308481852:web:a505413c502aa71b54b839"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
