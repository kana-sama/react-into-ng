import React from "react";
import { arrayOf, shape, string, number, bool, func } from "prop-types";

import MediaObject from "./MediaObject";
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
import FormControl from "./FormControl";

const NewMessageForm = ({
  users,
  authorID,
  text,
  isDisabled,
  onAuthorIDChange,
  onTextChange,
  onSubmit
}) => {
  const canSubmit = authorID && text.trim().length > 0;

  return (
    <MediaObject title="New message">
      <form onSubmit={onSubmit}>
        <FormControl label="Author">
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
        </FormControl>
        <FormControl label="Text">
          <Input
            placeholder="Text"
            value={text}
            onChange={onTextChange}
            disabled={isDisabled}
          />
        </FormControl>
        <FormControl>
          <Button type="submit" disabled={isDisabled || !canSubmit}>
            Post message
          </Button>
        </FormControl>
      </form>
    </MediaObject>
  );
};

NewMessageForm.propTypes = {
  users: arrayOf(
    shape({
      id: number,
      name: string
    })
  ).isRequired,
  authorID: number.isRequired,
  text: string.isRequired,
  onAuthorIDChange: func.isRequired,
  onTextChange: func.isRequired,
  onSubmit: func.isRequired
};

export default NewMessageForm;
