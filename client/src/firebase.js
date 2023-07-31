import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC12fCq1WSeDp4EA4g2UUvrIYpkqTgY3ic",
  authDomain: "venturesnap-99264.firebaseapp.com",
  projectId: "venturesnap-99264",
  storageBucket: "venturesnap-99264.appspot.com",
  messagingSenderId: "1089130053423",
  appId: "1:1089130053423:web:2ebaef6f7c8c64d3ea2bda",
  measurementId: "G-XWW7R23QR0",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
