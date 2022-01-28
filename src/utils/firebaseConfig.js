import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOKts7Y_pQgn649reSzfs5tJAmJP4WUhk",
  authDomain: "backup-51896.firebaseapp.com",
  projectId: "backup-51896",
  storageBucket: "backup-51896.appspot.com",
  messagingSenderId: "137049409466",
  appId: "1:137049409466:web:fdf0a93311da66da1e7f83",
  measurementId: "G-9Q110HDM2B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
