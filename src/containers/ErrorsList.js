import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { arrayOf, string } from "prop-types";

import { getErrors } from "../modules/errors/selectors";

import MediaObject from "../components/MediaObject";

const ErrorsList = ({ errors }) =>
  <MediaObject title="errors">
    <ul>
      {errors.map(error =>
        <li key={error}>
          {error}
        </li>
      )}
    </ul>
  </MediaObject>;

ErrorsList.propTypes = {
  errors: arrayOf(string).isRequired
};

const mapStateToProps = createStructuredSelector({
  errors: getErrors
});

export default connect(mapStateToProps)(ErrorsList);
