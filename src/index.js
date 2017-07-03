import React, { Component } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import createStore from "./modules/createStore";
import { setDoc } from "./modules/doc/actions";

import App from "./containers/App";

window.React = React;
window.ReactDOM = { render };

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
