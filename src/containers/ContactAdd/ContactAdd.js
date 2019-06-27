import React, { Component } from "react";
import { connect } from "react-redux";

import classes from "./ContactAdd.module.css";

class ContactAdd extends Component {
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
    let picAddress =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYm-KcyvHy3PDkmh0V9KzkUk26255h0RwthshiaoanTnfH2B_IRg";

    if (this.state.picture) {
      picAddress = this.state.picture;
    } else {
      picAddress =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYm-KcyvHy3PDkmh0V9KzkUk26255h0RwthshiaoanTnfH2B_IRg";
    }

    let array = this.props.contacts;
    array.push({
      name: this.state.name,
      email: this.state.email,
      number: this.state.email,
      picture: picAddress
    });

    this.props.onAddContact(array);
  };

  render() {
    let disabled = false;
    if (this.state.name && this.state.email && this.state.phone) {
      disabled = false;
    } else {
      disabled = true;
    }

    console.log(this.props.contacts);

    return (
      <div className={classes.ContactAdd}>
        <div className={classes.form}>
          <h2>Add new contact</h2>
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
          <button onClick={this.sendContact} disabled={disabled}>
            Add
          </button>
        </div>
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
)(ContactAdd);
