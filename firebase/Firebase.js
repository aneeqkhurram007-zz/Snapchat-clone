// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAk7iiXnVwdvDkbXceLdU3jdAFxckDy-BE",
    authDomain: "snapchat-b4e5b.firebaseapp.com",
    projectId: "snapchat-b4e5b",
    storageBucket: "snapchat-b4e5b.appspot.com",
    messagingSenderId: "567652044353",
    appId: "1:567652044353:web:8b9eba3ba0e02db1e780c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
!getApps().length ? app : getApp()

const db = getFirestore();

const auth = getAuth();

const storage = getStorage();

const provider = new GoogleAuthProvider();

export { db, auth, storage, provider }