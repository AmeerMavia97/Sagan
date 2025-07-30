import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWxVq1V3RUQa1i423_ITfBwVf5_mQRV5E",
  authDomain: "sagan-test.firebaseapp.com",
  projectId: "sagan-test",
  storageBucket: "sagan-test.firebasestorage.app",
  messagingSenderId: "310137151209",
  appId: "1:310137151209:web:2ab4505d1bea0e66625a78",
  measurementId: "G-XMQJGPGVKT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
