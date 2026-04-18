// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG5Mt_XdvcQHSX434ErJOTbtOlVDflNzw",
  authDomain: "the-dragon-news-2d02d.firebaseapp.com",
  projectId: "the-dragon-news-2d02d",
  storageBucket: "the-dragon-news-2d02d.firebasestorage.app",
  messagingSenderId: "375844789333",
  appId: "1:375844789333:web:ec241946f5b48807fc88dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);