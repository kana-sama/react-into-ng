import React from "react";
import { storiesOf } from "@storybook/react";

import MediaObject from "../src/components/MediaObject";

const stories = storiesOf("MediaObject", module);

stories.add("empty", () => <MediaObject />);

stories.add("with title", () => <MediaObject title="Title" />);

stories.add("with content", () => <MediaObject>Content</MediaObject>);

stories.add("with title and content", () =>
  <MediaObject title="Title">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum cum soluta
      obcaecati labore ipsam sed repudiandae ea quae? Maxime aliquam magni
      reprehenderit molestiae voluptatem eaque unde quo modi libero, iure.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum nesciunt
      soluta, quas provident cumque. Tenetur sequi non rem reprehenderit
      asperiores dolores qui eum dolorum eaque temporibus et, aliquid fugit
      eveniet.
    </p>
  </MediaObject>
);

stories.add("with list of them", () =>
  <div>
    <MediaObject title="The first media object">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum cum
        soluta obcaecati labore ipsam sed repudiandae ea quae? Maxime aliquam
        magni reprehenderit molestiae voluptatem eaque unde quo modi libero,
        iure.
      </p>
    </MediaObject>
    <MediaObject title="The second one">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, nobis?
        Itaque, ducimus, ab. Laboriosam quam sint aperiam magni possimus
        doloribus et quibusdam commodi natus, facilis vel provident, tempora
        expedita vero.
      </p>
    </MediaObject>
  </div>
);
