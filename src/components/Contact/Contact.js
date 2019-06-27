import React from "react";
import classes from "./Contact.module.css";

function Contact(props) {
  return (
    <div className={classes.Contact}>
      <div className={classes.picture}>
        <img src="" alt="" />
      </div>
      <div className={classes.descript}>
        <h3 className={classes.name} />
        <p className={classes.email} />
        <p className={classes.phone} />
      </div>
    </div>
  );
}

export default Contact;
