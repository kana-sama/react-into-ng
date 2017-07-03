import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import FormControl from "../src/components/FormControl";
import Input from "../src/components/Input";

const stories = storiesOf("FormControl", module);

stories.add("with label", () =>
  <FormControl label="Text">
    <Input value="Text" onChange={action("change text")} />
  </FormControl>
);

stories.add("without label", () =>
  <FormControl label="">
    <Input value="Text" onChange={action("change text")} />
  </FormControl>
);
