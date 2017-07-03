import React from "react";
import { pluck } from "ramda";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import {
  withKnobs,
  array,
  select,
  text,
  boolean
} from "@storybook/addon-knobs";

import normalizeList from "../src/utils/normalizeList";

import NewMessageForm from "../src/components/NewMessageForm";

const users = [
  { id: 1, name: "user# 1" },
  { id: 2, name: "user# 2 !!!" },
  { id: 5, name: "user# 3 !!!!!" }
];

const usersAsObj = pluck("name", normalizeList(users));

const stories = storiesOf("NewMessageForm", module);

stories.addDecorator(withKnobs);

stories.add("index", () => {
  return (
    <NewMessageForm
      users={users}
      authorID={(select("Author", usersAsObj, users[0].id), 10)}
      text={text("Text", "")}
      isDisabled={boolean("Disabled", false)}
      onAuthorIDChange={action("change author id")}
      onTextChange={action("change text")}
      onSubmit={e => {
        e.preventDefault();
        action("submit")(e);
      }}
    />
  );
});
