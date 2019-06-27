import React, { Component } from "react";

import Contact from "../../components/Contact/Contact";
import classes from "./ContactList.module.css";

class ContactList extends Component {
  state = {};
  render() {
    return (
      <div className={classes.ContactList}>
        <Contact />
      </div>
    );
  }
}

export default ContactList;
