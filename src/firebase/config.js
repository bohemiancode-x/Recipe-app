import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBuwvqYspqO8KP4tLsoidye8ttSyF_vfi0",
    authDomain: "cooking-ninja-914e6.firebaseapp.com",
    projectId: "cooking-ninja-914e6",
    storageBucket: "cooking-ninja-914e6.appspot.com",
    messagingSenderId: "629631375004",
    appId: "1:629631375004:web:898aa675ad2c6c0f783f59"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export { projectFirestore }