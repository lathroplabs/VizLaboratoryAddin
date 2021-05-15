import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { firestoreDb } from "./firebaseConfiguration";

export const getAuth = async (uid) => {
  try {
    const authRef = firestoreDb.collection('users').doc(uid);
    const doc = await authRef.get();
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      return doc.data()
    }
    
  } catch (error) {
    console.log('Error', error)
  }
}
