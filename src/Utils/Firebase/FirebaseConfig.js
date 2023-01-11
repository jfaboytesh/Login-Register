// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCve6woMq0deHXNTgJPgqtlUFHWIhYDCcg",
  authDomain: "login-and-register-27cd4.firebaseapp.com",
  projectId: "login-and-register-27cd4",
  storageBucket: "login-and-register-27cd4.appspot.com",
  messagingSenderId: "811018828013",
  appId: "1:811018828013:web:9d46153500bc36db26f4e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
