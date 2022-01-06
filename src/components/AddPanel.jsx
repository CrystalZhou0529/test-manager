import React, { Component } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Step from "./add/Step";
import IDInput from "./IDInput";
import NameInput from "./add/NameInput";

function AddPanel(props) {
  let navigate = useNavigate();
  let location = useLocation();
  if (!location.state.layer) {
    navigate("/");
  }
  const layer = location.state.layer;

  return (
    <div>
      <IDInput id={props.value.idInput} onIDChange={props.onIDChange} />
      <NameInput
        name={props.value.nameInput}
        onNameChange={props.onNameChange}
      />
      {props.value.steps.map((step, index) => (
        <Step
          key={step.id}
          step={step}
          index={index}
          onPageSelect={(e) => {
            props.onPageSelect(e, step.id);
          }}
          onElementSelect={(e) => {
            props.onElementSelect(e, step.id);
          }}
          onOperationSelect={(e) => {
            props.onOperationSelect(e, step.id);
          }}
          onTransSelect={(e) => {
            props.onTransSelect(e, step.id);
          }}
          onDelete={() => {
            props.onDelete(step.id);
          }}
        />
      ))}
      <button className="btn btn-success m-2" onClick={props.onAddStep}>
        Add Step
      </button>
      <button
        className="btn btn-dark m-2"
        onClick={() => {
          props.onSubmit(layer);
          navigate("/");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default AddPanel;
