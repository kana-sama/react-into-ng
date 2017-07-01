import React, { Component } from "react";
import { Provider } from "react-redux";

import createChatterStore from "./modules/store";
import { setTopic } from "./modules/topic/actions";

import Chat from "./containers/Chat";

export default class ChatterApp extends Component {
  componentWillMount() {
    this.store = createChatterStore();
    this.store.dispatch(setTopic(this.props.topic));
  }

  render() {
    return (
      <Provider store={this.store}>
        <Chat />
      </Provider>
    );
  }
}
