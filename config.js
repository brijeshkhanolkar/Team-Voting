import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCX6lel9hVfV0cUSZtRmVCgg9vUFqsZ5Pg",
    authDomain: "pro-c67-a9017.firebaseapp.com",
    projectId: "pro-c67-a9017",
    storageBucket: "pro-c67-a9017.appspot.com",
    messagingSenderId: "452769054419",
    appId:"1:452769054419:web:9e62b6b19782955af15e26"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.database();