import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bool } from "prop-types";

import { getAreEntitiesFetching } from "../modules/entities/selectors";
import { getHasErrors } from "../modules/errors/selectors";

import MessagesList from "./MessagesList";
import NewMessageForm from "./NewMessageForm";
import ErrorsList from "./ErrorsList";

const App = ({ areEntitiesFetching, hasErrors }) => {
  if (areEntitiesFetching) {
    return <h3>Loading data...</h3>;
  }

  if (hasErrors) {
    return <ErrorsList />;
  }

  return (
    <div>
      <NewMessageForm />
      <MessagesList />
    </div>
  );
};

App.propTypes = {
  areEntitiesFetching: bool.isRequired,
  hasErrors: bool.isRequired
};

const mapStateToProps = createStructuredSelector({
  areEntitiesFetching: getAreEntitiesFetching,
  hasErrors: getHasErrors
});

export default connect(mapStateToProps)(App);
