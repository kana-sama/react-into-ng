import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "../src/components/Button";

const stories = storiesOf("Button", module);

stories.add("with text", () =>
  <Button onClick={action("click")}>Button</Button>
);

stories.add("disabled", () =>
  <Button onClick={action("click")} disabled>
    Button
  </Button>
);
