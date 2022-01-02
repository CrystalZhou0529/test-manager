import React, { Component } from "react";

class PageVisualizer extends React.Component {
  render() {
    const pageName = this.props.stepItem.name;
    return (
      <div className="page col col-3">
        <span>{this.props.stepItem.name}</span>
        {this.props.stepItem.elements.map((element, index) => {
          let classes = "page-element ";
          classes += element.type;
          return this.generateElement(element, index, pageName);
        })}
      </div>
    );
  }

  generateElement(element, index, pageName) {
    const step = this.props.value.filter(
      (step) => step.element === element.name && step.page === pageName
    );
    if (element.type === "button") {
      const clicked = step.length > 0 && step[0].operation === "Clicked";
      let classes = "page-element ";
      classes += clicked ? "btn-success" : "";
      return (
        <div className={classes} key={index}>
          {clicked && <span> {step[0].id}: </span>}
          {element.name}
        </div>
      );
    } else if (element.type === "dropdown") {
      const mentioned = step.length > 0 && step[0].operation !== "";
      return (
        <div className="page-element" key={index}>
          {mentioned && <span> {step[0].id}: </span>}
          {element.name}
          {mentioned && <span> - {step[0].operation}</span>}
        </div>
      );
    }
  }
}

export default PageVisualizer;
