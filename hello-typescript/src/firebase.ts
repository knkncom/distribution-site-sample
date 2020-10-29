import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/firebase-storage";

var firebaseConfig = {
  apiKey: "AIzaSyB1cxwzhQfonQofmM7wosHddmduqXe-ipE",
  authDomain: "distribution-site-5044a.firebaseapp.com",
  databaseURL: "https://distribution-site-5044a.firebaseio.com",
  projectId: "distribution-site-5044a",
  storageBucket: "distribution-site-5044a.appspot.com",
  messagingSenderId: "716382884362",
  appId: "1:716382884362:web:7bc7f0fbee3e811e6d85f3",
  measurementId: "G-3TPK76NP2V"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;