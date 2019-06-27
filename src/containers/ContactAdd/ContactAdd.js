import React, { Component } from "react";
import classes from "./ContactAdd.module.css";

class ContactAdd extends Component {
  state = {
    name: false,
    email: false,
    phone: false,
    picture: false,
    contact: []
  };

  nameCorrect = event => {
    if (event.target.value.length > 0) {
      this.setState({ nameCorrect: event.target.value });
    } else {
      this.setState({ nameCorrect: false });
    }
  };

  emailCorrect = event => {
    if (event.target.value.length > 0) {
      this.setState({ emailCorrect: event.target.value });
    } else {
      this.setState({ emailCorrect: false });
    }
  };

  phoneCorrect = event => {
    if (event.target.value.length > 0) {
      this.setState({ phoneCorrect: event.target.value });
    } else {
      this.setState({ phoneCorrect: false });
    }
  };

  pictureCorrect = event => {
    if (event.target.value.length > 0) {
      this.setState({ pictureCorrect: event.target.value });
    } else {
      this.setState({ pictureCorrect: false });
    }
  };

  sendContact = () => {};

  render() {
    let disabled = false;
    if (
      this.state.nameCorrect &&
      this.state.emailCorrect &&
      this.state.phoneCorrect &&
      this.state.pictureCorrect
    ) {
      disabled = false;
    } else {
      disabled = true;
    }

    console.log(
      this.state.nameCorrect,
      this.state.emailCorrect,
      this.state.phoneCorrect,
      this.state.pictureCorrect
    );

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

export default ContactAdd;
