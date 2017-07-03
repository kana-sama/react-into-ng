import React from "react";
import { string, node } from "prop-types";

import Card from "./Card";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";

const MediaObject = ({ title, children }) =>
  <Card>
    <CardTitle>
      {title}
    </CardTitle>
    <CardBody>
      {children}
    </CardBody>
  </Card>;

MediaObject.propTypes = {
  title: string,
  children: node
};

export default MediaObject;
