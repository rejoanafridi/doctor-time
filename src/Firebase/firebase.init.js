// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import firebaseConfig from "./firebase.config";
// Initialize Firebase
const initializeFirebase = () => {

     const app = initializeApp(firebaseConfig);
}
export default initializeFirebase;