import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMfTIBGx-K1p2oPllQlAqJCdBgVzFq6Rg",
    authDomain: "udd-restaurantapp-reyes.firebaseapp.com",
    projectId: "udd-restaurantapp-reyes",
    storageBucket: "udd-restaurantapp-reyes.appspot.com",
    messagingSenderId: "985985544074",
    appId: "1:985985544074:web:2ae4c2db8ab7df75952273"
};

const firebaseApp = initializeApp( firebaseConfig );
export const db = getFirestore( firebaseApp );
// Initialize Firebase