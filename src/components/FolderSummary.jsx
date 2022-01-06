import React from "react";
import { useLocation, useNavigate } from "react-router";
import { getTestsFromLayer, similarityTableRanked } from "../data";

function FolderSummary(props) {
  let navigate = useNavigate();
  let location = useLocation();
  let folder = [];
  if (location.state && location.state.from) {
    folder = location.state.from;
  }
  const count = getTestsFromLayer(folder).length;
  const result = similarityTableRanked(folder);
  return (
    <React.Fragment>
      <div className="row summary-row">
        <div className="col col-6 summary-col">
          <span>Test case count:</span>
          <h1>{count}</h1>
        </div>
        <div className="col col-6 summary-col">
          <span>Module status:</span>
          <h1>🟢</h1>
        </div>
      </div>

      <div className="row table-row">
        <h2>Test Similarity Analysis</h2>
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
      </div>
    </React.Fragment>
  );
}

export default FolderSummary;
