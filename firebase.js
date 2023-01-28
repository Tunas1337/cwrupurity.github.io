// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth, signInAnonymously, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js'
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCAkgxcBmyJEA5kYJp60SBFIRGVWSs8LFM",
    authDomain: "cwrupurity.firebaseapp.com",
    projectId: "cwrupurity",
    storageBucket: "cwrupurity.appspot.com",
    messagingSenderId: "895090781942",
    appId: "1:895090781942:web:bfe81e115d9afe974486d7",
    measurementId: "G-JLFJWD5RJ3",
    databaseURL: "https://cwrupurity-default-rtdb.firebaseio.com",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
// Get anonymous auth
const auth = getAuth();
var uid = "unknown"

signInAnonymously(auth)
    .then(() => {
        // Signed in..
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
    });

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        uid = user.uid;
    }
});

export function writeUserData(results) {
    const dataPath = "users/" + uid + "/" + Date.now()

    set(ref(database, dataPath), {
        results: results,
    });
}