import React from "react";
import { arrayOf, shape, string, number, bool, func } from "prop-types";

import MediaObject from "./MediaObject";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";

const NewMessageForm = ({
  users,
  authorID,
  text,
  isDisabled,
  canSubmit,
  onAuthorIDChange,
  onTextChange,
  onSubmit
}) =>
  <MediaObject title="New message">
    <form onSubmit={onSubmit}>
      <Select
        value={authorID}
        onChange={onAuthorIDChange}
        disabled={isDisabled}
      >
        {users.map(({ id, name }) =>
          <option key={id} value={id}>
            {name}
          </option>
        )}
      </Select>
      <Input
        placeholder="Text"
        value={text}
        onChange={onTextChange}
        disabled={isDisabled}
      />
      <Button type="submit" disabled={isDisabled || !canSubmit}>
        Post message
      </Button>
    </form>
  </MediaObject>;

NewMessageForm.propTypes = {
  users: arrayOf(
    shape({
      id: number,
      name: string
    })
  ).isRequired,
  authorID: number.isRequired,
  text: string.isRequired,
  canSubmit: bool.isRequired,
  onAuthorIDChange: func.isRequired,
  onTextChange: func.isRequired,
  onSubmit: func.isRequired
};

export default NewMessageForm;
