import React from "react";
import { getDropdown } from "../../data";

function PageDropdown(props) {
  const dropdown = getDropdown();
  return (
    <div>
      <select
        onChange={props.onChange}
        className="page-dropdown"
        value={props.current.page}
      >
        {dropdown.map((page, index) =>
          page.name === "" ? (
            <option key={index} value="" disabled>
              Select page
            </option>
          ) : (
            <option key={index} value={page.name}>
              {page.name}
            </option>
          )
        )}
      </select>
    </div>
  );
}

export default PageDropdown;
