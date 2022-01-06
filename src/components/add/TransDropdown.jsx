import React from "react";
import { searchTrans } from "../../data";

function TransDropdown(props) {
  let trans = [];
  const { current } = props;
  trans = searchTrans(current);
  if (!trans) return null;
  return (
    <div>
      <select
        className="trans-dropdown"
        value={trans.id}
        onChange={props.onChange}
      >
        <option value="" disabled>
          Select Option
        </option>
        {trans.transitions.map((trans, index) => (
          <option key={index} value={index}>
            {trans}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TransDropdown;
