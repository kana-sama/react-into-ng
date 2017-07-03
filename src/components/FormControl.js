import React from "react";
import styled from "styled-components";

const FormControlWrapper = styled.label`
  display: block;
  margin: 16px 0 0;

  font-weight: bold;
  font-size: 14px;
`;

const FormControlItem = styled.div`
  font-weight: normal;
  margin-top: 4px;
`;

export default ({ label, children }) =>
  <FormControlWrapper>
    {label}
    <FormControlItem>
      {children}
    </FormControlItem>
  </FormControlWrapper>;
