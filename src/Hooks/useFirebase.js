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
  // Refresh Function
  const [refreshState, setResfeshState] = useState(true);
  const toggleRefresh = () => {
    refreshState ? setResfeshState(false) : setResfeshState(true);
  };

  // Dark Mode Toggler
  const toggleTheme = (theme) => {
    if (theme === "light") {
      localStorage.setItem("theme", "light");
    } else if (theme === "dark") {
      localStorage.setItem("theme", "dark");
    } else if (theme === "system") {
      localStorage.removeItem("theme");
    }
    toggleRefresh();
  };

  // Theme Changer Function
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [refreshState]);

  return { refreshState, toggleRefresh, toggleTheme };
};

export default useFirebase;
