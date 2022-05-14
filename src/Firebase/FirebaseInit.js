import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";

const firebaseAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default firebaseAuthentication;
