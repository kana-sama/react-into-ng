import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import createStore from "./modules/createStore";
import { setDoc } from "./modules/doc/actions";

import App from "./containers/App";

if (!window.React) {
  window.React = React;
  window.ReactDOM = ReactDOM;
}

export default class DiscussionsEntryPoint extends Component {
  componentWillMount() {
    this.store = createStore();
    this.store.dispatch(setDoc(this.props.doc));
  }

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>
    );
  }
}
