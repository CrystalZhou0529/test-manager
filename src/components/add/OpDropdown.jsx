import React from "react";
import { getDropdown } from "../../data";

function OperationDropdown(props) {
  let operations = [];
  const { current } = props;
  if (current.element !== "") {
    operations = getDropdown()
      .filter((page) => page.name === current.page)[0]
      .elements.filter((element) => element.name === current.element)[0].values;
  }
  return (
    <div>
      <select
        className="element-dropdown"
        value={current.operation}
        onChange={props.onChange}
      >
        <option value="" disabled>
          Select Option
        </option>
        {operations.map((operation, index) => (
          <option key={index}>{operation}</option>
        ))}
      </select>
    </div>
  );
}

export default OperationDropdown;
