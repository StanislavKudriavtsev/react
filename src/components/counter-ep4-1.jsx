/**
 * Code with mosh => EP4: Composing Components
 * Uncontrolled component,
 * this one has its own local state
 **/

import React, { Component } from "react";

class Counter extends Component {
  // each component has its own local state
  // and since we have our value stored in that local state
  // and the state here executes only once when an instance of
  // Counter component is created.
  // So, currently each <Counter /> is using its local state on incrementing.
  // So, the reset button, with the logic of resetting the value
  // in the main state in <Counters />, won't work.
  // because the local state will not be updated.
  // we need to remove the local state and have a single source of truth
  // which is the counters[] in the <Counters />
  // state = {
  //   value: this.props.counter.value
  // };

  state = {
    value: this.props.counter.value
  };

  formatCount = () => {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  };

  getBadgeClasses() {
    const { value } = this.state;
    let classes = "badge m-2 badge-";
    classes += value === 0 ? "warning" : "primary";
    return classes;
  }

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
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
