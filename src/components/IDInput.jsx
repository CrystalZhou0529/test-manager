import React, { Component } from "react";

class IDInput extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="test_id">Test Case ID </label>
        <input
          className="m-2"
          id="test_id"
          type="text"
          placeholder="123"
          value={this.props.id}
          onChange={this.props.onIDChange}
        />
      </div>
    );
  }
}

export default IDInput;
