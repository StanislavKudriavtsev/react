/**
 * Code with mosh => EP4: Composing Components
 * @todo Turn this component into a controlled component and lift the state up to the <App />
 **/

import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const {
      onReset,
      counters,
      onIncrement,
      onDelete,
      onDecrement
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-small m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
