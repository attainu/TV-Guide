import firebase from 'firebase';
import 'firebase/auth'

// Configure Firebase.
const config  = {
    apiKey: "AIzaSyBgSgu2OAtuoSNBeO7W0ll9tGh1k62tpdM",
    authDomain: "tv-guru-55690.firebaseapp.com",
    databaseURL: "https://tv-guru-55690.firebaseio.com",
    projectId: "tv-guru-55690",
    storageBucket: "tv-guru-55690.appspot.com",
    messagingSenderId: "289153112307",
    appId: "1:289153112307:web:b4869c65b2e78fb5f13f86",
    measurementId: "G-2402MY53KL"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }
  
  
// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/login',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
 //   firebase.auth.YahooAuthProvider.PROVIDER_ID
  ]
};
 export default uiConfig
