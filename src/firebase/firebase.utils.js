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
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // reference doc to specified path

  const snapShot = await userRef.get(); // object

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// exports
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
