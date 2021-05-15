import React from 'react';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel'
import { useBoolean } from '@uifabric/react-hooks'
import { clearModelStorage } from '../../utils/utils';

export default function HomeHelpPanel() {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);

  const emojiIcon = { iconName: 'InfoSolid' }

  return (
    <div>
      <IconButton iconProps={emojiIcon} title="Home Menu Help" ariaLabel="Help" onClick={openPanel} />
      <Panel
        headerText="Home Menu Help"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        closeButtonAriaLabel="Close"
      >
        <p>The User tab contains the Login/Logout function and information about the current user. </p>
        <h2>Login/Logout</h2>
        <p>Before you can use the Machine Learning Laboratory you must sign up for an account at 
        <a href="https://www.predictionlaboratory.com/signup"> the Prediction Laboratory website.</a> 
        </p>
        <p>
          If you are not signed in, the Create, Select, Train, and Predict tabs are not active.
        </p>
      </Panel>
    </div>
  )
}