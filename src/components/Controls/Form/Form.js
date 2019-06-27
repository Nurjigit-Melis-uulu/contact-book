import React from "react";
import classes from "./Form.module.css";

function Form(props) {
  return (
    <div className={classes.Form}>
      <h2>Add new contact</h2>
      <label for="name">
        Name
        <input type="text" placeholder="enter name" name="name" />
      </label>
      <label for="email">
        Email
        <input type="text" placeholder="enter email" name="email" />
      </label>
      <label for="phone">
        Phone
        <input type="text" placeholder="enter phone number" name="phone" />
      </label>
      <button>Add</button>
    </div>
  );
}

export default Form;
