import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./Editor.module.css";
import * as constants from "../../constants";

class Editor extends Component {
  state = {
    name: false,
    email: false,
    phone: false,
    picture: false
  };

  nameCorrect = event => {
    if (event.target.value.length > 0) {
      this.setState({ name: event.target.value });
    } else {
      this.setState({ name: false });
    }
  };

  emailCorrect = event => {
    if (event.target.value.length > 0) {
      this.setState({ email: event.target.value });
    } else {
      this.setState({ email: false });
    }
  };

  phoneCorrect = event => {
    if (event.target.value.length > 0) {
      this.setState({ phone: event.target.value });
    } else {
      this.setState({ phone: false });
    }
  };

  pictureCorrect = event => {
    if (event.target.value.length > 0) {
      this.setState({ picture: event.target.value });
    } else {
      this.setState({ picture: false });
    }
  };

  sendContact = () => {
    let picAddress = constants.linkToDefaultPicture;

    if (this.state.picture) {
      picAddress = this.state.picture;
    } else {
      picAddress = constants.linkToDefaultPicture;
    }

    let array = [...this.props.contacts];

    if (array.length === 0) {
      array.push({
        id: array.length,
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        picture: picAddress
      });

      this.props.onAddContact(array);
    }
    this.props.contacts.forEach(contact => {
      if (
        contact.name !== this.state.name &&
        contact.email !== this.state.email &&
        contact.phone !== this.state.phone
      ) {
        array.push({
          id: array.length,
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          picture: picAddress
        });
        this.props.onAddContact(array);
      } else {
        return;
      }
    });
  };

  editContact = () => {
    let picAddress = constants.linkToDefaultPicture;

    if (this.state.picture) {
      picAddress = this.state.picture;
    } else {
      picAddress = constants.linkToDefaultPicture;
    }

    let array = [...this.props.contacts];

    array.forEach(contact => {
      if (array.length > 0) {
        array.splice(this.props.editContactId - 1, 1, {
          id: array.length,
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          picture: picAddress
        });

        this.props.onAddContact(array);
      }
    });
  };

  render() {
    let disabled = false;
    if (this.state.name && this.state.email && this.state.phone) {
      disabled = false;
    } else {
      disabled = true;
    }

    let button = (
      <button onClick={this.sendContact} disabled={disabled}>
        Add
      </button>
    );

    let title = "Add new contact";

    if (this.props.EditorType === "edit") {
      button = (
        <button onClick={this.editContact} disabled={disabled}>
          Edit
        </button>
      );
      title = "Edit contact";
    } else {
      button = (
        <button onClick={this.sendContact} disabled={disabled}>
          Add
        </button>
      );
      title = "Add new contact";
    }
    return (
      <div className={classes.Editor}>
        <h2>{title}</h2>
        <label htmlFor="name">
          Name
          <input
            onInput={this.nameCorrect}
            type="text"
            placeholder="enter name"
            name="name"
            required
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            onInput={this.emailCorrect}
            type="text"
            placeholder="enter email"
            name="email"
            required
          />
        </label>
        <label htmlFor="phone">
          Phone
          <input
            onInput={this.phoneCorrect}
            type="text"
            placeholder="enter phone number"
            name="phone"
            required
          />
        </label>
        <label htmlFor="picture">
          Picture
          <input
            onInput={this.pictureCorrect}
            type="text"
            placeholder="enter link"
            name="picture"
            required
          />
        </label>
        {button}
      </div>
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
)(Editor);
