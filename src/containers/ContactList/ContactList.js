import React, { Component } from "react";
import { connect } from "react-redux";

import Contact from "../../components/Contact/Contact";
import classes from "./ContactList.module.css";

class ContactList extends Component {
  state = {};
  render() {
    let contact = <h2>Please, add your contacts!</h2>;

    if ([...this.props.contacts].length > 0) {
      contact = [...this.props.contacts].map(contact => {
        return (
          <li key={contact.id}>
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              picture={contact.picture}
            />
          </li>
        );
      });
    } else {
      contact = <h2>Please, add your contacts!</h2>;
    }

    return <ol className={classes.ContactList}>{contact}</ol>;
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};

export default connect(
  mapStateToProps,
  null
)(ContactList);
