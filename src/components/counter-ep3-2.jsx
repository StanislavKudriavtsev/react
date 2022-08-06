/**
 * Code with mosh => EP: Components (ep3-9)
 * @todo if the element in { tag[] } is at least 1, shows the content. if not, show a text saying it's empty.
 *
 */

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  renderTag = () => {
    const { tags } = this.state;

    if (tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  };

  render() {
    // true && false = false
    // true && 'string' = 'string' (truthy)
    // true && 'string' && 1 = 1 (truthy)
    return (
      <div>
        {this.state.tags.length === 0 && <p>Please create a tag!</p>}
        {this.renderTag()}
      </div>
    );
  }
}

export default Counter;
