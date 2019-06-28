import React, { Component } from "react";
import { connect } from "react-redux";

import Contact from "../../components/Contact/Contact";
import classes from "./ContactList.module.css";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

class ContactList extends Component {
  state = {
    open: false,
    editContactId: null
  };

  modalWindowOpen = event => {
    this.setState({
      open: !this.state.open,
      editContactId: event.target.getAttribute("data-id")
    });
  };

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
              modalWindowOpen={this.modalWindowOpen}
            />
          </li>
        );
      });
    } else {
      contact = <h2>Please, add your contacts!</h2>;
    }

    return (
      <>
        <ol className={classes.ContactList}>{contact}</ol>
        <ModalWindow
          EditContactId={this.state.editContactId}
          EditorType="edit"
          open={this.state.open}
          modalWindowOpen={this.modalWindowOpen}
        />
      </>
    );
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
