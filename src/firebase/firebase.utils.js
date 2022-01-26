//import firebase from 'firebase/compat/app'; v9
import firebase from "firebase/app";

//import 'firebase/compat/firestore'; v9
import "firebase/firestore";

// import 'firebase/compat/auth'; v9
import "firebase/auth";

// SDK config
const config = {
  apiKey: "AIzaSyA8XrL2zZ_zWroszaLAp7SMKXh_y8Pyrhw",
  authDomain: "react-enero-fb.firebaseapp.com",
  projectId: "react-enero-fb",
  storageBucket: "react-enero-fb.appspot.com",
  messagingSenderId: "377797822581",
  appId: "1:377797822581:web:40f286a1a53e122516503c",
};

firebase.initializeApp(config);

// create profile document
export const createUserProfileDocument = async () => {

}; 

// exports
export const auth = firebase.auth(); 
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase; 


