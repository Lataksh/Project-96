import firebase from 'firebase';
require('@firebase/firestore')


 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBKZDZDrMhfBuifhNjiJNxg60_bRMgkBgI",
    authDomain: "coviguard-86adf.firebaseapp.com",
    projectId: "coviguard-86adf",
    storageBucket: "coviguard-86adf.appspot.com",
    messagingSenderId: "814651872314",
    appId: "1:814651872314:web:9285c87e1e1892fca25103"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();