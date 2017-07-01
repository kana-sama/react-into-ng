import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose, withState, withHandlers } from "recompose";

import { addMessage } from "../modules/messages/actions";
import { getIsMessagePosting } from "../modules/messages/selectors";

import Card from "../components/Card";
import CardTitle from "../components/CardTitle";
import CardBody from "../components/CardBody";
import Input from "../components/Input";
import Button from "../components/Button";

const enhance = compose(
  withState("author", "setAuthor", ""),
  withState("message", "setMessage", ""),
  withHandlers({
    onAuthorChange: ({ setAuthor }) => event => {
      setAuthor(event.target.value);
    },
    onMessageChange: ({ setMessage }) => event => {
      setMessage(event.target.value);
    }
  }),
  connect(
    createStructuredSelector({
      isPosting: getIsMessagePosting
    }),
    (dispatch, { author, message, setMessage }) => ({
      onSubmit(event) {
        event.preventDefault();

        if (author !== "" && message !== "") {
          dispatch(addMessage(author, message));
          setMessage("");
        }
      }
    })
  )
);

const NewMessageForm = ({
  author,
  message,
  onAuthorChange,
  onMessageChange,
  onSubmit,
  isPosting
}) =>
  <form onSubmit={onSubmit}>
    <Card>
      <CardTitle>New message</CardTitle>
      <CardBody>
        <Input
          placeholder="Your nickname"
          value={author}
          onChange={onAuthorChange}
          disabled={isPosting}
        />
        <Input
          placeholder="Your message"
          value={message}
          onChange={onMessageChange}
          disabled={isPosting}
        />
        <Button type="submit" disabled={isPosting}>
          Post message
        </Button>
      </CardBody>
    </Card>
  </form>;

export default enhance(NewMessageForm);
