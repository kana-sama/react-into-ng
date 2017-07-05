import { connect } from "react-redux";

import {
  getMessageAuthorID,
  getMessageText
} from "../modules/entities/messages/selectors";

import { getUser } from "../modules/entities/users/selectors";

import MediaObject from "../components/MediaObject";

const mapStateToProps = (state, props) => {
  const text = getMessageText(state, props);
  const userID = getMessageAuthorID(state, props);
  const author = getUser(state, { userID });

  return {
    title: author.name,
    children: (
      <p>
        {text}
      </p>
    )
  };
};

export default connect(mapStateToProps)(MediaObject);
