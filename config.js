import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9kWINZVf_JacJGx-19i0VcEtsZ2V8_gg",
  authDomain: "electronikabibrioteca.firebaseapp.com",
  projectId: "electronikabibrioteca",
  storageBucket: "electronikabibrioteca.appspot.com",
  messagingSenderId: "1021135640362",
  appId: "1:1021135640362:web:e368e75107796d051ff053"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
