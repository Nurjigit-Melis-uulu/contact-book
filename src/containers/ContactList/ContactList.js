import React, { Component } from "react";
import { connect } from "react-redux";

import Contact from "../../components/Contact/Contact";
import classes from "./ContactList.module.css";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

class ContactList extends Component {
  state = {
    open: false,
    editContactId: null,
    contacts: this.props.contacts
  };

  deleteContact = event => {
    const array = [...this.state.contacts];
    let id = event.target.getAttribute("data-id");
    let index = this.props.contacts.findIndex(item => item.id === parseInt(id));
    array.splice(index, 1);

    this.setState({
      contacts: array
    });

    this.props.onAddContact(array);

    console.log(id, index, array);
  };

  modalWindowOpen = event => {
    this.setState({
      open: !this.state.open,
      editContactId: event.target.getAttribute("data-id")
    });
  };

  search = event => {
    let value = event.target.value;

    if (value.length === 0) {
      this.setState({
        contacts: this.props.contacts
      });
    } else {
      let array = [];

      this.props.contacts.forEach(contact => {
        if (
          contact.id === value ||
          contact.name === value ||
          contact.phone === value ||
          contact.email === value ||
          contact.picture === value
        ) {
          array.push(contact);
          this.setState({
            contacts: array
          });
        } else {
          this.setState({
            contacts: array
          });
        }
      });
    }
  };

  render() {
    let contact = <h2>Please, add your contacts!</h2>;

    if (this.state.contacts.length > 0) {
      contact = this.state.contacts.map(contact => {
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
              deleteContact={this.deleteContact}
            />
          </li>
        );
      });
    } else {
      contact = <h2>Please, add your contacts!</h2>;
    }

    return (
      <>
        <ol className={classes.ContactList}>
          <div className={classes.searchBox}>
            <input
              type="text"
              onInput={this.search}
              placeholder="search, enter the exact contact data."
            />
          </div>
          {contact}
        </ol>
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

const mapDispatchToProps = dispatch => {
  return {
    onAddContact: contacts => dispatch({ type: "ADD_CONTACT", contacts })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactList);
