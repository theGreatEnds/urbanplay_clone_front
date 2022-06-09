import React from "react";
import styled from "styled-components";

const SignBlock = styled.div`
  margin: 200px calc((100% - 448px) / 2);
  padding: 50px 0px;
  height: 400px;
  width: 448px;
  border: 1px solid silver;
  text-align: center;
`;

function SignStyle({ children }) {
  return (<SignBlock>{children}</SignBlock>);
}

export default SignStyle;
