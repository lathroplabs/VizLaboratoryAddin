import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCViSa-EEZ2ZwkqwnKtPCIZxUOF9fOXbpA",
  authDomain: "prediction-laboratory.firebaseapp.com",
  databaseURL: "https://prediction-laboratory.firebaseio.com",
  projectId: "prediction-laboratory",
  storageBucket: "prediction-laboratory.appspot.com",
  messagingSenderId: "1020992906286",
  appId: "1:1020992906286:web:276fbd1da3661e7ed8ebbf",
  measurementId: "G-MM3B2EGZ2Z"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firestoreDb = firebase.firestore()
export const cloudStorage = firebase.storage()
