import React, { useEffect, useContext, useState } from "react";
import firebase from "firebase";
import "firebase/auth";

import { PrimaryButton, TextField, MessageBar, MessageBarType } from "office-ui-fabric-react";
import { Stack, IStackProps, IStackStyles } from "@fluentui/react/lib/Stack";
import { emailSignIn, signOut } from "../../../firebase/firebaseAuthentication";
import UserContext from "../../users/UserContext";

export default function SignIn({ setLoggedIn }) {
  const { user, setUser } = useContext(UserContext);
  const [signinError, setSigninError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("Msg");

  useEffect(() => {
    const user_ = firebase.auth().currentUser;
    setUser(user_);
    function initSignin() {
      initializeSigninButtons();
    }
    initSignin();
  }, [user, setUser]);

  const columnProps = {
    tokens: { childrenGap: 10 }
  };

  return (
    <div className="centered">
      <div id="user-name"></div>
      <hr></hr>
      <div id="signin-block">
        <h1>Sign In</h1>
        {signinError && (
          <MessageBar
            messageBarType={MessageBarType.error}
            isMultiline={false}
            onDismiss={() => {
              setSigninError(false);
              setErrorMsg("");
            }}
            dismissButtonAriaLabel="Close"
          >
            {errorMsg}
          </MessageBar>
        )}
        <form id="email-signin-form" className="centered" onSubmit={handleSigninSubmit}>
          <Stack {...columnProps}>
            <TextField id="email-input" type="text" placeholder="Email" />
            <TextField id="password-input" type="password" placeholder="Password" />
          </Stack>
          <div className="centered">
            <PrimaryButton type="submit">Sign In</PrimaryButton>
            <br />
            <a href="https://predictionlaboratory.com/signup">Create an account</a>
          </div>
        </form>
      </div>
      <div id="signout-block" align="center">
        <PrimaryButton onClick={() => signOut()}>Sign Out</PrimaryButton>
      </div>
    </div>
  );

  function handleSigninSubmit(event) {
    event.preventDefault();
    const email = event.target["email-input"].value;
    const password = event.target["password-input"].value;
    emailSignIn(email, password, setSigninError, setErrorMsg);
  }

  async function initializeSigninButtons() {
    const signInBlock = document.getElementById("signin-block");
    const signOutBlock = document.getElementById("signout-block");
    const userName = document.getElementById("user-name");

    firebase.auth().onAuthStateChanged(authuser => {
      if (authuser) {
        setUser(authuser);
        setLoggedIn(true);
        signInBlock.style.display = "none";
        signOutBlock.style.display = "block";
        userName.innerHTML = "<b>Current User:</b> " + user.email;
      } else {
        setLoggedIn(false);
        signInBlock.style.display = "block";
        signOutBlock.style.display = "none";
        userName.innerHTML = "No Logged In User";
        setSigninError(false);
      }
    });
  }
}
