// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABXMEdZG5rHjRhp8COQNxIYuhFY65AHrw",
  authDomain: "clone-personal-73ec6.firebaseapp.com",
  projectId: "clone-personal-73ec6",
  storageBucket: "clone-personal-73ec6.appspot.com",
  messagingSenderId: "1036880957240",
  appId: "1:1036880957240:web:9cde4d4b3da8c4134fbbcd",
  measurementId: "G-Y38TE7GS8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth }; 
export default app;
