import React from "react";
import PageDropdown from "./PageDropdown";
import ElementDropdown from "./ElementDropdown";
import OperationDropdown from "./OpDropdown";
import TransDropdown from "./TransDropdown";
import { isIncompleteStep } from "../common";

function Step(props) {
  return (
    <div className="row" style={{ height: "40px", alignItems: "center" }}>
      <div className="col-1">
        <i
          className="bi bi-trash m-1"
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "2px",
          }}
          onClick={props.onDelete}
        ></i>
        <span>Step {props.index + 1}</span>
      </div>

      <div className="col-2">
        <PageDropdown current={props.step} onChange={props.onPageSelect} />
      </div>
      <div className="col-2">
        <ElementDropdown
          current={props.step}
          onChange={props.onElementSelect}
        />
      </div>
      <div className="col-2">
        <OperationDropdown
          current={props.step}
          onChange={props.onOperationSelect}
        />
      </div>
      {!isIncompleteStep(props.step) && (
        <div className="col-3">
          <TransDropdown current={props.step} onChange={props.onTransSelect} />
        </div>
      )}
    </div>
  );
}

export default Step;
