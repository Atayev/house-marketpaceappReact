import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC2N326svKoDy5U6UnUUA4yjv7ZjZnXzpw",
  authDomain: "house-marketplace-app-ce491.firebaseapp.com",
  projectId: "house-marketplace-app-ce491",
  storageBucket: "house-marketplace-app-ce491.appspot.com",
  messagingSenderId: "909261236411",
  appId: "1:909261236411:web:037cebf70ff1e03c5f619e",
  measurementId: "G-Y9M8ZXX4MY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore()