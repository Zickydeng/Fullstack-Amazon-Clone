// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDntrjYd7KKzoVhjuQ4-hTBKi7QWu2zzus",
    authDomain: "clone-13d42.firebaseapp.com",
    projectId: "clone-13d42",
    storageBucket: "clone-13d42.appspot.com",
    messagingSenderId: "685218400534",
    appId: "1:685218400534:web:5945db14fefbf455daa837",
    measurementId: "G-HD0JRB1VT8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
