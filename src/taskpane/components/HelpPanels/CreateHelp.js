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
        <p>The Create tab is the place to create a new chart.</p>
        <p>
        The procedure for creating a chart in Viz Lab is similar to how you create a chart in Excel.  First you select the 
        data for the chart in the current worksheet.  Then select the chart type from the dropdown menu.  Add a chart title and
        labels for the chart axes, the use the create button.

        The chart is then available for review in the 'View' tab.
        </p>
      </Panel>
    </div>
  )
}