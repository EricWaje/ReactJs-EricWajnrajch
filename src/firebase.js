import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyCRqxkisws68oQXMu_Jab_BfxJ1iUVSogM',
  authDomain: 'db-react-coder.firebaseapp.com',
  projectId: 'db-react-coder',
  storageBucket: 'db-react-coder.appspot.com',
  messagingSenderId: '545380423326',
  appId: '1:545380423326:web:5eeff9eeb9b56b3bff0d8f',
});

export const getFirebase = () => app;
export const getFirestore = () => firebase.firestore(app);
