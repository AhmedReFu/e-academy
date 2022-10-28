// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAhbXX1CrqIzpSur8oj10pcuy4mbEeGFk",
    authDomain: "rf-ai-helper.firebaseapp.com",
    projectId: "rf-ai-helper",
    storageBucket: "rf-ai-helper.appspot.com",
    messagingSenderId: "364242512154",
    appId: "1:364242512154:web:215a2b247360de598624a3",
    measurementId: "G-RQWQZVYZK8"

    /*  apiKey: process.env.REACT_APP_apiKey,
     authDomain: process.env.REACT_APP_authDomain,
     projectId: process.env.REACT_APP_projectId,
     storageBucket: process.env.REACT_APP_storageBucket,
     messagingSenderId: process.env.REACT_APP_messagingSenderId,
     appId: process.env.REACT_APP_appId, */
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app