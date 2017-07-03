import React, { Component } from "react";
import { Provider } from "react-redux";

import createStore from "./modules/createStore";
import { setDoc } from "./modules/doc/actions";

import App from "./containers/App";

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
