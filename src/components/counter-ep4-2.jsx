/**
 * Code with mosh => EP4: Composing Components
 * Controlled component.
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
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* because Counters is the one who owns all the value,
        it should be the one modifying it. */}
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
