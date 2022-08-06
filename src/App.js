/**
 * Code with mosh => EP4: Composing Components
 * start: ep4 - 12
 * @todo Lift the state up from <Counters /> so we have the ability to provide state[counter] to NavBar
 **/

import React from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
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
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  handleIncrement = counterObj => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counterObj);
    newCounters[index] = { ...counterObj };
    newCounters[index].value++;
    this.setState({ counters: newCounters });
  };

  handleDecrement = counterObj => {
    const newCounters = [...this.state.counters];
    const index = newCounters.indexOf(counterObj);
    newCounters[index] = { ...counterObj };
    newCounters[index].value--;
    this.setState({ counters: newCounters });
  };

  render() {
    return (
      <>
        <NavBar
          totalCounters={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </>
    );
  }
}

export default App;
