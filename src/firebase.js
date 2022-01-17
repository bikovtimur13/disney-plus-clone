import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDEKOKoN6dgnjCS-QqVtLsQpEblm7My2y8",
  authDomain: "disney-plus-clone-36b89.firebaseapp.com",
  projectId: "disney-plus-clone-36b89",
  storageBucket: "disney-plus-clone-36b89.appspot.com",
  messagingSenderId: "973970359795",
  appId: "1:973970359795:web:916d7a3d1052a39dd83e86",
  measurementId: "G-ZJWZYTEY82"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage;

export { auth, provider, storage };
export default db;
