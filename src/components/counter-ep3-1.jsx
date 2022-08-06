/**
 * Code with mosh => EP: Components (ep3-1 - ep3-8, ep3-10 - ep.3-14)
 * @todo understanding why return needs ()
 * because if there's no (), when js see the return statement it will add ; to it and it will be return;
 *
 * @todo what is "state"?
 * State is any data that this component needs.
 *
 * @todo how to refactor code, move code to new method automatically
 * by using shortcut = ctrl + shift + r or highlight the piece of code, right click and select Refactor...
 *
 * @todo how to not show the parent html but still can create react element properly with JSX
 * <> = <React.Fragement />
 *
 * @todo CSS inline property naming convention
 * - css inline property is in camelCase notation
 *
 * @todo why does any loop needs a key on each element?
 * - it needs "key" because it needs to uniquely indentify each item so it knows which to
 * update in the virtual dom if something changes and be in-sync with the dom. Key can be
 * unique only in each list
 *
 * @todo Handle Events
 * - we only pass the function, not call it.
 * - if not using arrow function for the event handler function, we will not have access to "this" and it will return undefine. because it's a stand-alone function.
 * - arrow function don't rebind the "this", it inherits it.
 * - one way to fix, if not using arrow function, is to have:
 * this.{eventHandlerFunction} = this.{eventHandlerFunction}.bind(this)
 * in the constructor function
 * - it will create a new instance of that function and assign "this" to the object.
 *
 * @todo how to update state
 * - don't update state directly
 * - use this.setState() which tells react the state is updated and it will figure out which part has changed and will update the DOM accordingly.
 *
 * @todo what happen under the hood when state is changed
 * - when we call setState(), react will know the state will be updated
 * - it then schedules a call to render() asynchronously which means sometime in the future, the render() is going to be called
 * - the render() will return a new react element (the new tree in the virtual dom)
 * - it will then compare the virtual dom and real dom and see which element needs update.
 * - in this case, it will see that the <span> will be modified because we use "count" property
 * - it will reach out to the actual dom and update it to by in-sync with the virtual dom.
 *
 * @todo how to pass argument to event handler
 * - we can not do `this.{eventFunction}(arg)` because this will call the function
 * - so we need some wrapper function and send the arg through that function instead
 * const wrapper = () => {
 *  return this.{eventFunction}(arg)
 * }
 * - but it's messy so we can do it inline with onClick=(() => this.{eventFunction}(arg))
 * - or do onClick={this.{eventFunction}.bind(this, arg)}
 */

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClasses() {
    const { count } = this.state;
    let classes = "badge m-2 badge-";
    classes += count === 0 ? "warning" : "primary";
    return classes;
  }

  handleIncrement = e => {
    console.log(e);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { tags } = this.state;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(tags)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counter;
