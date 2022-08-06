/**
 * Code with mosh => EP4: Composing Components
 * start: ep4 - 13
 * @todo Turn into stateless functional component
 **/

import React from "react";

// react will pass the props object as an argument at runtime.
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Navbar
      </a>
      <span className="badge badge-pill badge-primary">{totalCounters}</span>
    </nav>
  );
};

export default NavBar;
