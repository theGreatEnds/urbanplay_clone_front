import React from "react";
import styled from "styled-components";

const Bgc=styled.div`
padding-top:200px;
height:100vh;
background-color:black;
`
const SignBlock = styled.div`
  margin: 0 calc((100% - 448px) / 2);
  padding: 50px 0px;
  height: 400px;
  width: 448px;
  border: 1px solid silver;
  border-radius:10px;
  text-align: center;
  color:white;
`;

function SignStyle({ children }) {
  return (
  <Bgc>
    <SignBlock>{children}</SignBlock>
  </Bgc>
    );
}

export default SignStyle;
