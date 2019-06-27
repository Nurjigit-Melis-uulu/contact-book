import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

function Navbar(props) {
  return (
    <div className={classes.Navbar}>
      <div className={classes.logo}>Contact Book</div>
      <div className={classes.links}>
        <NavLink to="/">Contact list</NavLink>
        <NavLink to="/ContactAdd">Add contact</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
