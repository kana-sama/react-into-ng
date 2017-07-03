import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Select from "../src/components/Select";

const users = [
  { id: 1, name: "user# 1" },
  { id: 2, name: "user# 2 !!!" },
  { id: 5, name: "user# 3 !!!!!" }
];

const stories = storiesOf("Select", module);

const options = users.map(({ id, name }) =>
  <option key={id} value={id}>
    {name}
  </option>
);

stories.add("normal", () =>
  <Select value={1} onChange={action("change")}>
    {options}
  </Select>
);

stories.add("disabled", () =>
  <Select value={1} onChange={action("change")} disabled>
    {options}
  </Select>
);
