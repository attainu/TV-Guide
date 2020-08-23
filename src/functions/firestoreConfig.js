import firebase from 'firebase';

// Configure Firebase.
var firebaseConfig = {apiKey: "AIzaSyADSSv77ch6vci8cyw9Xtgl3XGw2ug6YWM",
authDomain: "tv-guru-9d496.firebaseapp.com",
databaseURL: "https://tv-guru-9d496.firebaseio.com",
projectId: "tv-guru-9d496",
storageBucket: "tv-guru-9d496.appspot.com",
messagingSenderId: "562593729830",
appId: "1:562593729830:web:c29b5bef377c271b4185e7"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }
  

var db=firebase.firestore()
export default db