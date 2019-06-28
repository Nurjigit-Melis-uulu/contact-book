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
          <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            number={contact.phone}
            picture={contact.picture}
          />
        );
      });
    } else {
      contact = <h2>Please, add your contacts!</h2>;
    }

    return <div className={classes.ContactList}>{contact}</div>;
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
