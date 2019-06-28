import React from "react";
import classes from "./ModalWindow.module.css";
import Editor from "../../containers/Editor/Editor";

function ModalWindow(props) {
  let open = { display: "none" };

  props.open ? (open = { display: "flex" }) : (open = { display: "none" });

  return (
    <div className={classes.ModalWindow} style={open}>
      <Editor
        editContactId={props.editContactId}
        EditorType={props.EditorType}
      />
      <button className={classes.close} onClick={props.modalWindowOpen}>
        X
      </button>
    </div>
  );
}

export default ModalWindow;
