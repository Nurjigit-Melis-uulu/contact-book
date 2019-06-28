import React from "react";
import classes from "./ContactAdd.module.css";
import Editor from "../../containers/Editor/Editor";

function ContactAdd(props) {
  return (
    <div className={classes.ContactAdd}>
      <Editor EditorType="Add" />
    </div>
  );
}

export default ContactAdd;
