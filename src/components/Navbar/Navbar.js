import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";

function Navbar(props) {
  return (
    <div className={classes.Navbar}>
      <div className={classes.logo}>Contact Book</div>
      <NavLink to="/ContactList" />
    </div>
  );
}

export default Navbar;
