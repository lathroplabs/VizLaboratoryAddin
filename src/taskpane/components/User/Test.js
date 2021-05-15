import React from 'react';
import { PrimaryButton, Label } from 'office-ui-fabric-react'

export default function TestButton() {
  
  return (
    <div className="centered">
      <Label>Test </Label>
      <PrimaryButton text="Test" onClick={runTest} allowDisabledFocus />
    </div>
  )

  async function runTest() {
    const test_lr = 0.0000000023456
    console.log('test lr', test_lr.toPrecision(3))
  }
}


