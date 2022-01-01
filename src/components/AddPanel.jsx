import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Step from "./add/Step";
import IDInput from "./IDInput";

function AddPanel(props) {
  let navigate = useNavigate();
  return (
    <div>
      <h2>Add Test Case</h2>
      <IDInput id={props.value.idInput} onIDChange={props.onIDChange} />
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
          props.onSubmit();
          navigate("/");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default AddPanel;
