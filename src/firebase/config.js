import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDVZvWN3fWaAbsFKdWe4-o_fHuVejBCzWc",
  authDomain: "photo-gallery-141de.firebaseapp.com",
  projectId: "photo-gallery-141de",
  storageBucket: "photo-gallery-141de.appspot.com",
  messagingSenderId: "1040327584402",
  appId: "1:1040327584402:web:a95173c0f85428607e144b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
