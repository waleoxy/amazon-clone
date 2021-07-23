// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBuUmQ4u7JWLfIrD335ATU4dRID-3dYfto",
  authDomain: "amzone-clone-b8f5f.firebaseapp.com",
  projectId: "amzone-clone-b8f5f",
  storageBucket: "amzone-clone-b8f5f.appspot.com",
  messagingSenderId: "799683639137",
  appId: "1:799683639137:web:1eccfbcaf65688b292b720",
  measurementId: "G-E21D91W13G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

