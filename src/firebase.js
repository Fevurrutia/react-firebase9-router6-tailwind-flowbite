import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDUwNCj2bcGwSdDNz9aVfMiLMfOLse4dsA",
    authDomain: "react-practica-uno.firebaseapp.com",
    projectId: "react-practica-uno",
    storageBucket: "react-practica-uno.appspot.com",
    messagingSenderId: "445041485370",
    appId: "1:445041485370:web:9f3deaf5dc1254307d3703"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}