import React, { Component } from "react";
import AddPanel from "./AddPanel";
import StepVisualizer from "./StepVisualizer";
import { addDB } from "../data";

class Add extends Component {
  state = {
    count: 4,
    idInput: "",
    steps: [
      {
        id: 1,
        page: "",
        element: "",
        operation: "",
      },
      {
        id: 2,
        page: "",
        element: "",
        operation: "",
      },
      {
        id: 3,
        page: "",
        element: "",
        operation: "",
      },
      {
        id: 4,
        page: "",
        element: "",
        operation: "",
      },
    ],
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <AddPanel
            value={this.state}
            onPageSelect={this.handlePageSelect}
            onElementSelect={this.handleElementSelect}
            onOperationSelect={this.handleOperationSelect}
            onDelete={this.handleDelete}
            onAddStep={this.handleAdd}
            onIDChange={this.handleIDInputChange}
            onSubmit={this.handleSubmit}
          />
        </div>
        <div className="col-6">
          <StepVisualizer value={this.state} />
        </div>
      </div>
    );
  }

  handlePageSelect = (e, id) => {
    let steps = [...this.state.steps];
    steps[id - 1].page = e.target.value;
    steps[id - 1].operation = "";
    steps[id - 1].element = "";
    this.setState({ steps: steps });
  };

  handleElementSelect = (e, id) => {
    let steps = [...this.state.steps];
    steps[id - 1].element = e.target.value;
    steps[id - 1].operation = "";
    this.setState({ steps: steps });
  };

  handleOperationSelect = (e, id) => {
    let steps = [...this.state.steps];
    steps[id - 1].operation = e.target.value;
    this.setState({ steps: steps });
  };

  handleAdd = () => {
    const { steps, count } = this.state;
    this.setState({
      steps: [
        ...steps,
        {
          id: count + 1,
          page: "",
          element: "",
          operation: "",
        },
      ],
      count: count + 1,
    });
  };

  handleDelete = (id) => {
    let steps = this.state.steps.filter((step) => step.id !== id);
    this.setState({ steps: steps });
  };

  handleSubmit = () => {
    let steps = this.state.steps.filter((step) => step.page !== "");
    if (steps && this.state.idInput) {
      let test = {
        id: this.state.idInput,
        steps: steps,
      };
      addDB(test);
    }
  };

  handleIDInputChange = (e) => {
    this.setState({ idInput: e.target.value });
  };
}

export default Add;
