import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGrolnbuqedvXA-lpprEKnFeiv733E5zY",
  authDomain: "ecommerce-shopping-a6c4d.firebaseapp.com",
  projectId: "ecommerce-shopping-a6c4d",
  storageBucket: "ecommerce-shopping-a6c4d.appspot.com",
  messagingSenderId: "229913649323",
  appId: "1:229913649323:web:cd2c9888d586e64c0797ee",
  measurementId: "G-PFXT4VR7E8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();

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
      console.error("Error creating user in firebase: ", error.message);
    }
  }

  return userRef;
};
