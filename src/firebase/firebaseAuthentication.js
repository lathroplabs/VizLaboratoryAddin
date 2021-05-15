import firebase from 'firebase/app'
import 'firebase/auth'

export const signOut = () => {
  firebase.auth().signOut()
    .then(() => console.log('successfully logged out'))
    .catch((error) => console.log('Error while signing out: ', error))
}

export const emailSignIn = (email, password, setSigninError, setErrorMsg) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => signinError.innerHTML = "")
    .catch((error) => { setSigninError(true) 
                        setErrorMsg('Problem with Sign In: ' + error.message)
                      })
}
