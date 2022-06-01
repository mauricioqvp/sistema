import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let firebaseConfig = {
    apiKey: "AIzaSyBJrETL7Y3t0zWnieEZcWfPIO-sGTgj7h4",
    authDomain: "sistema-84f2d.firebaseapp.com",
    projectId: "sistema-84f2d",
    storageBucket: "sistema-84f2d.appspot.com",
    messagingSenderId: "309304986182",
    appId: "1:309304986182:web:89b28a5a3e5403105e9847",
    measurementId: "G-H5BEHFGQ63"
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

export default firebase;