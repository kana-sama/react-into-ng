import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose, lifecycle } from "recompose";
import { isEmpty } from "ramda";

import {
  getReversedMessagesIDs,
  getIsMessagesFetching
} from "../modules/messages/selectors";

import { fetchMessages } from "../modules/messages/actions";

import Message from "./Message";

const enhance = compose(
  connect(
    createStructuredSelector({
      messagesIDs: getReversedMessagesIDs,
      isFetching: getIsMessagesFetching
    }),
    dispatch => ({
      onInit() {
        dispatch(fetchMessages());
      }
    })
  ),
  lifecycle({
    componentWillMount() {
      this.props.onInit();
    }
  })
);

const MessageList = ({ messagesIDs, isFetching }) => {
  if (isFetching) {
    return <h4>Fetching...</h4>;
  }

  if (isEmpty(messagesIDs)) {
    return <h4>No messages</h4>;
  }

  return (
    <div>
      {messagesIDs.map(messageID =>
        <Message messageID={messageID} key={messageID} />
      )}
    </div>
  );
};

export default enhance(MessageList);
