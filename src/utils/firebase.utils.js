import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBumfhkSmJeKxMqxanYhhZwRPmg-rEVffE",
  authDomain: "crwn-clothing-db-b9a00.firebaseapp.com",
  projectId: "crwn-clothing-db-b9a00",
  storageBucket: "crwn-clothing-db-b9a00.firebasestorage.app",
  messagingSenderId: "440564794294",
  appId: "1:440564794294:web:7658c46ad652fe99d53717",
  measurementId: "G-HTGFZHHSZQ",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(); // this is class

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  // check if data exits or not in database use exits()
  // console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
};
