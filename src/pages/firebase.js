// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyC8plEOEHMMeSW-L6DEv1zri5aoeLzN088",
  authDomain: "disaster-management-fc9ef.firebaseapp.com",
  projectId: "disaster-management-fc9ef",
  storageBucket: "disaster-management-fc9ef.appspot.com",
  messagingSenderId: "317833268112",
  appId: "1:317833268112:web:dab2d88689e6297055c115",
  measurementId: "G-JG2DTP46DF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const provider = new GoogleAuthProvider();
export {app,auth,provider};