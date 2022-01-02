import React from "react";
import { useParams } from "react-router-dom";
import StepVisualizer from "./StepVisualizer";
import { getDropdown, searchDB } from "../data";

export default function Test() {
  const params = useParams();
  const id = params.testId;
  const steps = searchDB(id)[0].steps;
  return (
    <div>
      <p>Test Case {params.testId}</p>
      <div className="row">
        <div className="col col-6">
          <table className="table tests-table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Page</th>
                <th scope="col">Element</th>
                <th scope="col">Operation</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((step, index) => {
                return (
                  <tr key={index}>
                    <th>{step.id}</th>
                    <td>{step.page}</td>
                    <td>{step.element}</td>
                    <td>{step.operation}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col col-6">aaa</div>
      </div>
      <StepVisualizer
        value={{
          dropdownInfo: getDropdown(),
          steps: steps,
        }}
      />
    </div>
  );
}
