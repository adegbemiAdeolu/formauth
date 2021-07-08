import Firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyAWr5sEO_poipz1U2UD3ef1dVvOwZTq6aM",
    authDomain: "formauth-e9980.firebaseapp.com",
    projectId: "formauth-e9980",
    storageBucket: "formauth-e9980.appspot.com",
    messagingSenderId: "1024365279721",
    appId: "1:1024365279721:web:7728622fc409b97138f378"
};

const firebase = Firebase.initializeApp(config);

export { firebase };