import React, { Component } from "react";
import classes from "./ContactAdd.module.css";
import Form from "../../components/Controls/Form/Form";

class ContactAdd extends Component {
  state = {};
  render() {
    return (
      <div className={classes.ContactAdd}>
        <Form />
      </div>
    );
  }
}

export default ContactAdd;
