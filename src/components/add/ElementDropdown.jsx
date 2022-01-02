import React from "react";
import { getDropdown } from "../../data";

function ElementDropdown(props) {
  const dropdown = getDropdown();
  return (
    <div>
      <select
        className="element-dropdown"
        value={props.current.element}
        onChange={props.onChange}
      >
        <option value="" disabled>
          Select element
        </option>
        {(props.page !== ""
          ? dropdown.filter((page) => page.name === props.current.page)[0]
              .elements
          : []
        ).map((element, index) => (
          <option key={index}>{element.name}</option>
        ))}
      </select>
    </div>
  );
}

export default ElementDropdown;
