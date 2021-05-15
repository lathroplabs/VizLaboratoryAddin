import React from 'react';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Panel } from 'office-ui-fabric-react/lib/Panel'
import { useBoolean } from '@uifabric/react-hooks'

export default function CreateHelpPanel() {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] = useBoolean(false);

  const emojiIcon = { iconName: 'InfoSolid' }

  return (
    <div>
      <IconButton iconProps={emojiIcon} title="Create Menu Help" ariaLabel="Help" onClick={openPanel} />
      <Panel
        headerText="Create Menu Help"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        closeButtonAriaLabel="Close"
      >
        <p>The Create tab is the place to create a new Machine Learning Model.</p>
        <h2>Create Input Worksheet</h2>
        <p>
        The Create button will add a new worksheet to Excel.  This worksheet is where you will add the training data 
        for your new model.  The first row of the worksheet should contain the headers for your data, and the last 
        column <b>MUST</b> contain the target variables you want your model to predict.  If you are creating an unsupervised 
        model, there is no target variable, so the order of the columns is not important.
        </p>
        <h2>Analyze Data for Model</h2>
        <p>
        Once the TrainingData worksheet contains your training data, select the type of model you want 
        to build  - <b>Supervised</b> or <b>Unsupervised</b>.  
        </p>
        <p>
          When you select the Analyze Data button, the Machine Learning Labaratory (ML Lab) will review the training data, 
          determine the type of data in each column, and calculate various statistics for the data.
          The ML Lab adds a row of <b>Data Type Selectors</b> just under the column headers with its best guess for the type of data
          in that column.     
        </p>
          You may choose between two types of data, Continuous or Categorical. Choose Continuous for data that can take a 
          range of values such as money or temperature. The values can be positive or negative.  Categorical data 
          indicates the data belongs to different groups or classes. Examples are a person's gender, or the grades 
          given on a test. It's important that you review and make any changes to these selections.
        <p>

        </p>
        <h2>Create and Save Model</h2>
        <p>
          ML Lab will determine which model types are appropriate for your data and will place these model types in the 
          Select a Model dropdown menu.
        </p>
        <p>
          Give your new model a name and a short description and then save your model. After saving the model it will become the active model.
        </p>
      </Panel>
    </div>
  )
}