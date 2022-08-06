/**
 * Code with mosh => EP4: Composing Components
 * Starts from: ep4-19 (Exercise, Decrement Button)
 **/

import React, { Component } from "react";

class Counter extends Component {
  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses() {
    const { value } = this.props.counter;
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    const {
      onIncrement,
      onDecrement,
      onDelete,
      counter,
      counter: { id }
    } = this.props;
    return (
      <div className="row">
        <div className="col-2">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            disabled={counter.value <= 0 && true}
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            -
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
