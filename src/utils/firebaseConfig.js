import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7VAqyRXI0IaFEFFUA-v9jfiFh-7q99Ek",
  authDomain: "data-673e9.firebaseapp.com",
  projectId: "data-673e9",
  storageBucket: "data-673e9.appspot.com",
  messagingSenderId: "398810604644",
  appId: "1:398810604644:web:0f381424c970b4d21aab71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
