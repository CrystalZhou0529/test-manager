import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { searchDB } from "../data";

function TestDisplay() {
  let navigate = useNavigate();
  let params = useParams();
  let result = searchDB(params.testId);
  return (
    <table className="table tests-table">
      <thead>
        <tr>
          <th scope="col" style={{ width: "5vw" }}>
            #
          </th>
          <th scope="col" style={{ width: "10vw" }}>
            Test Case ID
          </th>
          <th scope="col">Steps</th>
        </tr>
      </thead>
      <tbody>
        {result.map((test, index) => {
          return (
            <tr
              key={test.id}
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/tc/${test.id}`);
              }}
            >
              <th>{index + 1}</th>
              <td>TC{test.id}</td>
              <td>{serializeStep(test.steps)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TestDisplay;

const MAXLENGTH = 80;

function serializeStep(steps) {
  let str = "";
  for (let i = 0; i < steps.length; ++i) {
    let step = steps[i];
    if (str !== "") {
      str += " - ";
    }
    str += step.page + "(" + step.element + ")";
  }
  if (str.length > MAXLENGTH) {
    return str.substring(0, 80) + "...";
  } else {
    return str;
  }
}
