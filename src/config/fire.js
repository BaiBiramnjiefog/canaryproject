import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAF_RGsZj3Sxa1K9NDcFrB-2gja9QVcVUA",
    authDomain: "canary-react-auth.firebaseapp.com",
    databaseURL: "https://canary-react-auth.firebaseio.com",
    projectId: "canary-react-auth",
    storageBucket: "canary-react-auth.appspot.com",
    messagingSenderId: "355986827805",
    appId: "1:355986827805:web:a6deb56eaad9a30d6df4f4",
    measurementId: "G-VG14S3VGQK"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

