import React, { Component } from "react";
import AddPanel from "./AddPanel";
import StepVisualizer from "./StepVisualizer";
import { addDB } from "../data";

class Add extends Component {
  state = {
    count: 4,
    idInput: "",
    nameInput: "",
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
      <React.Fragment>
        <div className="row m-2">
          <div className="col-6">
            <AddPanel
              value={this.state}
              onPageSelect={this.handlePageSelect}
              onElementSelect={this.handleElementSelect}
              onOperationSelect={this.handleOperationSelect}
              onDelete={this.handleDelete}
              onAddStep={this.handleAdd}
              onIDChange={this.handleIDInputChange}
              onNameChange={this.handleNameInputChange}
              onSubmit={this.handleSubmit}
            />
          </div>
          <div className="col-6">aaa</div>
        </div>
        <div className="row m-2">
          <StepVisualizer value={this.state} />
        </div>
      </React.Fragment>
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

  handleSubmit = (layer) => {
    let steps = this.state.steps.filter((step) => step.page !== "");
    if (steps && this.state.idInput) {
      let test = {
        id: this.state.idInput,
        name: this.state.nameInput,
        steps: steps,
      };
      addDB(test, layer);
    }
  };

  handleIDInputChange = (e) => {
    this.setState({ idInput: e.target.value });
  };

  handleNameInputChange = (e) => {
    this.setState({ nameInput: e.target.value });
  };
}

export default Add;
