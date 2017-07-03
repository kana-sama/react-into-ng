import styled from "styled-components";

export default styled.button`
  background: #fbfbfb;
  border: 1px solid #222;

  padding: 5px 10px;

  color: #222;
  text-transform: uppercase;
  font-weight: bold;

  :not(:disabled) {
    :focus,
    :hover {
      border-color: red;
      color: red;
    }
  }

  :active {
    background: rgba(0, 0, 0, .05);
  }

  :disabled {
    color: #aaa;
    border-color: #aaa;
  }

  :focus {
    outline: none;
  }
`;
