import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import firebaseAuthentication from "../Firebase/FirebaseInit";

// call firebase config file
firebaseAuthentication();

const useFirebase = () => {
  return {};
};

export default useFirebase;
