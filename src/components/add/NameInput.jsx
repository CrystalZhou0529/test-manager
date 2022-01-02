import React, { Component } from "react";

function NameInput(props) {
  return (
    <div>
      <label htmlFor="test_name">
        <strong>Test Name </strong>
      </label>
      <input
        className="m-2"
        id="test_name"
        type="text"
        placeholder="Subscription Purchase Flow"
        value={props.name}
        onChange={props.onNameChange}
        style={{ width: "250px" }}
      />
    </div>
  );
}

export default NameInput;
