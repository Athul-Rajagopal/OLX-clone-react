import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGmEIaRZ52rMEz-CTs0Ti6b62hwnPRph0",
  authDomain: "fir-b4a11.firebaseapp.com",
  projectId: "fir-b4a11",
  storageBucket: "fir-b4a11.appspot.com",
  messagingSenderId: "833294992924",
  appId: "1:833294992924:web:eb1a35809e040a19fdc1d9",
  measurementId: "G-8ENM54PRK1"
};

  export default  firebase.initializeApp(firebaseConfig)