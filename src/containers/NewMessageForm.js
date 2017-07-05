import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose, withState, withHandlers, withProps } from "recompose";
import { path, pipe, prop, head, keys, isEmpty } from "ramda";

import { addMessage } from "../modules/entities/messages/actions";
import { getIsMessagePosting } from "../modules/entities/messages/selectors";

import {
  getUsersList,
  getFirstUserID
} from "../modules/entities/users/selectors";

import NewMessageForm from "../components/NewMessageForm";

const mapStateToProps = createStructuredSelector({
  isDisabled: getIsMessagePosting,
  users: getUsersList,
  defaultAuthorID: getFirstUserID
});

const mapDispatchToProps = dispatch => ({
  addMessage(authorID, text) {
    dispatch(addMessage(authorID, text));
  }
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState("text", "setText", ""),
  withState("authorID", "setAuthorID", prop("defaultAuthorID")),
  withHandlers({
    onAuthorIDChange: ({ setAuthorID }) => event => {
      setAuthorID(parseInt(event.target.value, 10));
    },
    onTextChange: ({ setText }) => event => {
      setText(event.target.value);
    },
    onSubmit: ({ addMessage, authorID, text, setText }) => event => {
      event.preventDefault();
      addMessage(authorID, text);
      setText("");
    }
  })
);

export default enhance(NewMessageForm);
