import React, { useContext, useEffect, useState } from 'react';
import { Label } from 'office-ui-fabric-react';
import UserContext from "../../users/UserContext";
import AuthContext from "../../users/AuthContext";
import { getAuth } from '../../../firebase/firebaseRepository';

export default function Subscription() {
  const { user } = useContext(UserContext);
  const { auth, setAuth } = useContext(AuthContext);
  
  useEffect(() => {
    async function authDoc() {
      const auth_ = await getAuth(user.uid)
      setAuth(auth_)
    }
    authDoc()
  }, [auth, user]);

  let plan = "";
  
  if (auth && auth.isFreePlan) {
    plan = "Free Plan"
  } else if (auth && auth.subscription.nickname === 'Solo') {
    plan = "Solo Plan"
  } else if (auth && auth.subscription.nickname === 'Team') {
    plan = "Team Plan"
  } else if (auth && auth.subscription.nickname === 'Enterprise') {
    plan = "Enterprise Plan"
  }else {
    plan = "No current subsciption"
  }

  return (
    <div className="centered">
      <div id="current-model-name"></div>
      <hr></hr>
      {user && <Label>Current Subscription Plan: {plan} </Label>}
      {user && <a href="https://predictionlaboratory.com/signup">Upgrade your account</a>}
    </div>
  )
}
