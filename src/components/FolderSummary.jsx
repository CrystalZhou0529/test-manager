import React from "react";
import { useLocation, useNavigate } from "react-router";
import { similarityTableRanked } from "../data";

function FolderSummary(props) {
  let navigate = useNavigate();
  let location = useLocation();
  const folder = location.state.from ? location.state.from : [];
  const result = similarityTableRanked(folder);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Test Case 1</th>
          <th scope="col">Test Case 2</th>
          <th scope="col">Similarity</th>
        </tr>
      </thead>
      <tbody>
        {result.map((line, index) => {
          return (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td
                onClick={() => {
                  navigate(`/tc/${line.test1}`);
                }}
                style={{ cursor: "pointer" }}
              >
                {line.test1}
              </td>
              <td
                onClick={() => {
                  navigate(`/tc/${line.test2}`);
                }}
                style={{ cursor: "pointer" }}
              >
                {line.test2}
              </td>
              <td>{line.result + "%"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default FolderSummary;
