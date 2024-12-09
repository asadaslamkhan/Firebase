import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCDic6VwRp_wWaxD0YNC8CctdPIdTq0Ku8",
  authDomain: "react-auth-412eb.firebaseapp.com",
  projectId: "react-auth-412eb",
  storageBucket: "react-auth-412eb.firebasestorage.app",
  messagingSenderId: "884905239946",
  appId: "1:884905239946:web:8b8c2d7da59c272af51473",
  measurementId: "G-HFGLTYJZT6"
};


const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
