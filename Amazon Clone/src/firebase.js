import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDScnEPWYzh_RLCwEZWI1wz-OflpsXFFVI",
  authDomain: "clone-51601.firebaseapp.com",
  projectId: "clone-51601",
  storageBucket: "clone-51601.appspot.com",
  messagingSenderId: "650884283640",
  appId: "1:650884283640:web:0be3dac55572c705e6cf0d",
  measurementId: "G-H8P48XK9CY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //تهيئة تطبيق

const db = firebaseApp.firestore(); //  نتع تطبيق نتاعك data base انشاء 

const auth = firebase.auth(); //  في تطبيق نتاعك  sign-in and log-inهنا نتاع بش تقدر دير 


export {db, auth};