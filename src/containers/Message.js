import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  getMessageAuthor,
  getMessageText
} from "../modules/messages/selectors";

import Card from "../components/Card";
import CardTitle from "../components/CardTitle";
import CardBody from "../components/CardBody";

const enhance = connect(
  createStructuredSelector({
    author: getMessageAuthor,
    text: getMessageText
  })
);

const Message = ({ author, text }) =>
  <Card>
    <CardTitle>
      {author}
    </CardTitle>
    <CardBody>
      {text}
    </CardBody>
  </Card>;

export default enhance(Message);
