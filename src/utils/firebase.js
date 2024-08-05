// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6B5Zo5rC4jR5_G9mirsEsKV_QCU4OfDo",
  authDomain: "netflixgpt-c04e2.firebaseapp.com",
  projectId: "netflixgpt-c04e2",
  storageBucket: "netflixgpt-c04e2.appspot.com",
  messagingSenderId: "567380233980",
  appId: "1:567380233980:web:e8bd470d5381389d271179",
  measurementId: "G-F86JEHNHMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();