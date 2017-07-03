import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Input from "../src/components/Input";

const stories = storiesOf("Input", module);

stories.add("empty", () => <Input placeholder="Placeholder" value="" />);

stories.add("with text", () => <Input value="Text" />);

stories.add("disabled", () => <Input value="Text" disabled />);
