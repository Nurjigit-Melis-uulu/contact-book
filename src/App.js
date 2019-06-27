import React, { Component } from "react";
import { Route } from "react-router-dom";

import classes from "./App.module.css";
import ContactList from "./containers/ContactList/ContactList";
import ContactAdd from "./containers/ContactAdd/ContactAdd";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Navbar />
        <Route path="/" exact component={ContactList} />
        <Route path="/ContactAdd" component={ContactAdd} />
      </div>
    );
  }
}

export default App;
