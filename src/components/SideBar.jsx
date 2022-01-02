import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  getStructure,
  toggleStructureCollapse,
  accurateSearchDB,
} from "../data";

function SideBar() {
  let navigate = useNavigate();
  const [structure, setStructure] = useState(getStructure());
  return generateSideBar(structure, [], setStructure, navigate);
}

export default SideBar;

function generateSideBar(structure, layers, setStructure, navigate) {
  if (!structure) return;
  const layer = layers.length;
  const indent = "    ";
  const isCollapsed = structure.collapse;
  const collapse = isCollapsed ? "collapsed" : "uncollapsed";
  const folderIcon = "bi bi-folder-" + (isCollapsed ? "plus" : "minus");
  return (
    <React.Fragment>
      <div className={"sidebar-item sidebar-folder "}>
        <span
          name="folder-title"
          className="sidebar-click"
          onClick={() => {
            toggleStructureCollapse(layers);
            setStructure({ ...getStructure() });
          }}
        >
          <span>{indent.repeat(layer)}</span>
          <i className={folderIcon}></i>
          <span> {structure.name}</span>
        </span>

        <span
          name="add-folder-btn"
          title="Add folder"
          className="sidebar-click"
          onClick={() => {
            console.log(layers.join(","));
          }}
        >
          <i className="bi bi-folder2-open sidebar-right-icon"></i>
        </span>

        <span
          name="add-test-btn"
          title="Add test"
          className="sidebar-click"
          onClick={() => {
            let s = layers.join(",");
            navigate("/add", { state: { layer: s } });
          }}
        >
          <i className="bi bi-plus-square sidebar-right-icon"></i>
        </span>
      </div>
      {isCollapsed === false && (
        <div>
          {structure.tests.map((test, index) => {
            let testStr = " TC" + test + " - " + accurateSearchDB(test).name;
            if (testStr.length + layer * 2 >= 28) {
              testStr = testStr.substring(0, 25) + "...";
            }
            return (
              <div
                className={"sidebar-item sidebar-test " + collapse}
                key={index}
              >
                <span>{indent.repeat(layer + 1)}</span>
                <i className="bi bi-card-list"></i>
                <span>{testStr}</span>
              </div>
            );
          })}
        </div>
      )}
      {!isCollapsed &&
        structure.children &&
        structure.children.map((folder, index) => {
          return generateSideBar(
            folder,
            [...layers, index],
            setStructure,
            navigate
          );
        })}
    </React.Fragment>
  );
}
