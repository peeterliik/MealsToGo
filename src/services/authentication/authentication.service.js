import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBX2LiXKiS7Uuc3JlQCJhLVrUucl0X4bgA",
  authDomain: "mealstogo-87fdf.firebaseapp.com",
  projectId: "mealstogo-87fdf",
  storageBucket: "mealstogo-87fdf.appspot.com",
  messagingSenderId: "902661485471",
  appId: "1:902661485471:web:a98359ee050a4cde0483aa",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginRequest = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const registerRequest = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);
