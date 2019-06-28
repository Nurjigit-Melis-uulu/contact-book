import React from "react";
import { connect } from "react-redux";

import classes from "./Contact.module.css";

function Contact(props) {
  let deleteContact = event => {
    let array = null;
    let index = event.target.id;

    if (props.contacts.length > 1) {
      array = props.contacts.splice(index - 1, 1);
    } else {
      array = [];
    }

    console.log(array);

    props.onAddContact(array);
  };

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
      <div className={classes.control}>
        <button className={classes.edit}>Edit</button>
        <button
          className={classes.delete}
          onClick={deleteContact}
          id={props.id}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: contacts => dispatch({ type: "ADD_CONTACT", contacts })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Contact);
