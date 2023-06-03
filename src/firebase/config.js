import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// firebase config files
const firebaseConfig = {
  apiKey: "AIzaSyDgpy2a2EKUChV0DTVKunW8UFbvZkpZJ6M",
  authDomain: "aadarsh-portfolio.firebaseapp.com",
  projectId: "aadarsh-portfolio",
  storageBucket: "aadarsh-portfolio.appspot.com",
  messagingSenderId: "485046092437",
  appId: "1:485046092437:web:18bb33e9025b04e2ded19c",
  measurementId: "G-6HBSZ4VLQK"
};

// firebase application instances
const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);