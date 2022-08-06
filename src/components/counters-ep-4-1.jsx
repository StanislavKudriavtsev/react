/**
 * Code with mosh => EP4: Composing Components
 * Before lifting the state up to <App /> on ep4-12
 * @todo Raising and Handling event
 * @todo Update the state
 * @todo Adding button to reset all counter
 * @todo Update the state following the raised event properly.
 *
 **/

import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = selectedCounterID => {
    const counters = this.state.counters.filter(
      ({ id }) => id !== selectedCounterID
    );
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0; // set the value
      return counter; // return each counter obj back to array
    });
    this.setState({ counters });
  };

  handleIncrement = counterObj => {
    // clone new array but the object inside it still referencing the one in state.
    const newCounters = [...this.state.counters];

    // and because not all the objects will be modified,
    // we can clone only the specific object that we received via raised event's arg.
    const index = newCounters.indexOf(counterObj);

    // copy the received object into the new cloned array
    // newCounters[index] = counterObj; -> this still mess with the original object
    newCounters[index] = { ...counterObj };

    // increate the value of that cloned object in the cloned array.
    newCounters[index].value++;

    // to check whether the state is directly updated.
    // console.log(newCounters[index]);
    // console.log(this.state.counters[index]);

    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn-primary btn-small m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          // if in the future, counter obj has more property
          // we will have to set another property.
          // so it would be nicer to send the whole object
          // instead of multiple separate props
          // old version.
          // <Counter
          //   key={id}
          //   id={id}
          //   value={value}
          //   onDelete={this.handleDelete}
          // />
          <Counter
            key={counter.id}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
