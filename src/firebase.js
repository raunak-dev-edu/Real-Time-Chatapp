import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCcfUEoaJ0yXY2UEHPXgmx7gWJN6K2qKjk",
    authDomain: "realtime-chatapp-fecce.firebaseapp.com",
    projectId: "realtime-chatapp-fecce",
    storageBucket: "realtime-chatapp-fecce.appspot.com",
    messagingSenderId: "985052776946",
    appId: "1:985052776946:web:5e7a888754522ff18ec36b"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();