import firebase from 'firebase/compat/app';
import {getAuth} from 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDHCERfNINX82M7FEkI_nVGKEvBXNdWFBY",
    authDomain: "neighbe.firebaseapp.com",
    projectId: "neighbe",
    storageBucket: "neighbe.appspot.com",
    messagingSenderId: "545659308872",
    appId: "1:545659308872:web:4009829a5fd0846c83417d"
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();

