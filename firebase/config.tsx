// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAb5uVBUy-GeZDcI13Sqpk6L37M4W2zW5g",
    authDomain: "gameitsqm.firebaseapp.com",
    databaseURL: "https://gameitsqm-default-rtdb.firebaseio.com",
    projectId: "gameitsqm",
    storageBucket: "gameitsqm.firebasestorage.app",
    messagingSenderId: "1029672745603",
    appId: "1:1029672745603:web:a22387189b80ccc865f9b6",
    measurementId: "G-4GCZEYB7FY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app)