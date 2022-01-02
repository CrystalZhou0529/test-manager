import React, { Component } from "react";
import PageVisualizer from "./PageVisualizer";
import { getDropdown } from "../data";

function StepVisualizer(props) {
  const dropdown = getDropdown();
  return (
    <div className="row">
      {dropdown
        .filter((page) => page.name !== "")
        .map((page, index) => (
          <PageVisualizer
            stepItem={page}
            value={props.value.steps}
            key={index}
          />
        ))}
    </div>
  );
}

export default StepVisualizer;
