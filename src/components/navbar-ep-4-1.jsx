/**
 * Code with mosh => EP4: Composing Components
 * start: ep4 - 11
 **/

import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <span className="badge badge-pill badge-primary">
          {this.props.totalCounters}
        </span>
      </nav>
    );
  }
}

export default NavBar;
