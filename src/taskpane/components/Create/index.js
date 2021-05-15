import React from "react";
import { useState, useContext, useEffect } from "react";

import AnalyzeDataButton from "./AnalyzeData";
import CreateInputWorksheetButton from "./CreateChart";
import SaveModelButton from "./SaveModel";
import ModelMetaContext from "../../models/ModelMetaContext";

export default function CreateModel() {
  const { modelMeta, setModelMeta } = useContext(ModelMetaContext);
  const [supervised, setSupervised] = useState(true);
  const [targetLabel, setTargetLabel] = useState(null);
  const [targetType, setTargetType] = useState("");
  const [targetVals, setTargetVals] = useState([]);
  const [dataSchema, setDataSchema] = useState({});
  const [clusterSelected, setClusterSelected] = useState(false);

  return (
    <>
      <hr className="rounded"></hr>
      <CreateInputWorksheetButton />
      <hr className="rounded"></hr>
      <AnalyzeDataButton
        supervised={supervised}
        setSupervised={setSupervised}
        targetLabel={targetLabel}
        setTargetLabel={setTargetLabel}
        setTargetType={setTargetType}
        setTargetVals={setTargetVals}
        setDataSchema={setDataSchema}
      />
      <hr className="rounded"></hr>
      <SaveModelButton
        supervised={supervised}
        targetType={targetType}
        targetLabel={targetLabel}
        targetVals={targetVals}
        dataSchema={dataSchema}
        clusterSelected={clusterSelected}
        setClusterSelected={setClusterSelected}
      />
    </>
  );
}
