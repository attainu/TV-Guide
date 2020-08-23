import firebase from 'firebase';
import 'firebase/auth'

// Configure Firebase.
const config = {
  apiKey: "AIzaSyADSSv77ch6vci8cyw9Xtgl3XGw2ug6YWM",
  authDomain: "tv-guru-9d496.firebaseapp.com",
  databaseURL: "https://tv-guru-9d496.firebaseio.com",
  projectId: "tv-guru-9d496",
  storageBucket: "tv-guru-9d496.appspot.com",
  messagingSenderId: "562593729830",
  appId: "1:562593729830:web:c29b5bef377c271b4185e7"
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}


// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  //signInSuccessUrl: '/',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //   firebase.auth.YahooAuthProvider.PROVIDER_ID
  ]
};
export default uiConfig
