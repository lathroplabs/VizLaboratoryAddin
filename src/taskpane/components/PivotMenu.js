import React, { useState, useEffect, useContext } from "react";
import { Label } from "office-ui-fabric-react/lib/Label";
import { Pivot, PivotItem } from "office-ui-fabric-react/lib/Pivot";
import User from "./User/index";
import CreateChart from './Create/index'
import HomeHelpPanel from "./HelpPanels/UserHelp";
import CreateHelpPanel from "./HelpPanels/CreateHelp";
import firebase from "firebase";
import "firebase/auth";

export default function PivotMenu() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    let mounted = true;
    let user = firebase.auth().currentUser;
    if (mounted) {
      user ? setLoggedIn(true) : setLoggedIn(false);
    }
    return () => {
      mounted = false;
    };
  }, [loggedIn, setLoggedIn]);

  return (
    <div>
      <Pivot>
        <PivotItem
          headerText="User"
          headerButtonProps={{
            "data-order": 1,
            "data-title": "User"
          }}
        >
          <div className="pivot-head">
            <Label>User Info</Label>
            <HomeHelpPanel></HomeHelpPanel>
          </div>
          <User setLoggedIn={setLoggedIn} />
        </PivotItem>
        <PivotItem
          headerText="Create"
          headerButtonProps={{
            disabled: !loggedIn
          }}
        >
          <div className="pivot-head">
            <Label>Create Chart</Label>
            <CreateHelpPanel />
          </div>
          <CreateChart />
        </PivotItem>
      </Pivot>
    </div>
  );
}
