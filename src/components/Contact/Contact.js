import React from "react";
import classes from "./Contact.module.css";

function Contact(props) {
  return (
    <div className={classes.Contact}>
      <div className={classes.picture}>
        <img src={props.picture} alt="" />
      </div>
      <div className={classes.descript}>
        <h3 className={classes.name}>{props.name}</h3>
        <p className={classes.email}>{props.email}</p>
        <p className={classes.phone}>{props.phone}</p>
      </div>
    </div>
  );
}

export default Contact;
