import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Link } from "../components/link";
import { withTheme } from "./decorators";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .addDecorator(withTheme)
  .add("with text", () => (
    <Button
      onClick={action("clicked")}
      disabled={boolean("disabled", false)}
      loading={boolean("loading", false)}
    >
      {text("Label", "Hello Storybook")}
    </Button>
  ));

storiesOf("Link", module)
  .addDecorator(withKnobs)
  .addDecorator(withTheme)
  .add("with text", () => <Link to="/">{text("Label", "Hello Storybook")}</Link>);

storiesOf("Input", module)
  .addDecorator(withKnobs)
  .addDecorator(withTheme)
  .add("with text", () => (
    <Input placeholder={text("Placeholder", "Hello Storybook")} />
  ));