// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANV8GXNjeSpvrmhF8IFAaMRC-sB0YWBKU",
    authDomain: "davidov-react.firebaseapp.com",
    databaseURL: "https://davidov-react-default-rtdb.firebaseio.com",
    projectId: "davidov-react",
    storageBucket: "davidov-react.appspot.com",
    messagingSenderId: "452494487284",
    appId: "1:452494487284:web:c62c24b642b1d37c94b8a1"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase