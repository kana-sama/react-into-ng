import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { isEmpty } from "ramda";
import { arrayOf, number } from "prop-types";

import { getReversedMessagesIDs } from "../modules/entities/messages/selectors";

import Message from "./Message";

const MessageList = ({ messagesIDs }) =>
  <div>
    {isEmpty(messagesIDs)
      ? <h4>No messages</h4>
      : messagesIDs.map(messageID =>
          <Message messageID={messageID} key={messageID} />
        )}
  </div>;

MessageList.propTypes = {
  messagesIDs: arrayOf(number).isRequired
};

const mapStateToProps = createStructuredSelector({
  messagesIDs: getReversedMessagesIDs
});

export default connect(mapStateToProps)(MessageList);
