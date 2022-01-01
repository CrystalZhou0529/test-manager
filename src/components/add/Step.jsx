import React from "react";
import PageDropdown from "./PageDropdown";
import ElementDropdown from "./ElementDropdown";
import OperationDropdown from "./OpDropdown";

class Step extends React.Component {
  handleElementSelectionChange = (e) => {
    this.setState({ element: e.target.value });
  };

  handleOperationSelectionChange = (e) => {
    this.setState({ operation: e.target.value });
  };

  render() {
    return (
      <div className="row" style={{ height: "40px", alignItems: "center" }}>
        <div className="col-2">
          <i
            className="bi bi-trash m-1"
            style={{
              backgroundColor: "red",
              color: "white",
              borderRadius: "2px",
            }}
            onClick={this.props.onDelete}
          ></i>
          <span>Step {this.props.index + 1}</span>
        </div>

        <div className="col-3">
          <PageDropdown
            current={this.props.step}
            dropdownInfo={this.props.dropdownInfo}
            onChange={this.props.onPageSelect}
          />
        </div>
        <div className="col-3">
          <ElementDropdown
            dropdownInfo={this.props.dropdownInfo}
            current={this.props.step}
            onChange={this.props.onElementSelect}
          />
        </div>
        <div className="col-3">
          <OperationDropdown
            dropdownInfo={this.props.dropdownInfo}
            current={this.props.step}
            onChange={this.props.onOperationSelect}
          />
        </div>
      </div>
    );
  }
}

export default Step;
