import { render } from '@testing-library/react';
import React,{Component} from 'react'
import styled from 'styled-components';
import SignStyle from './SignStyle';
import Header from './Header';

const Input = styled.input`
margin-top: 30px;
width: 150px;
height: 30px;
border: 1px solid silver;
`;

const InputBtn = styled(Input)`
margin-top: 70px;
width: 230px;
`;


class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(this.state.value)
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

render(){
  return(
    <>
    <Header/>
    <SignStyle>
    <form action="" method="post" name="signup" onsubmit={this.handleSubmit}>
        <label for="id">아이디 </label>
        <Input type="id" name="id"  /> <br/>
  
        <label for="password">비밀번호 </label>
        <Input type="password" name="password" /> <br/>
  
        <label for="name">이름  &nbsp;&nbsp; </label>
        <Input type="text" name="name"  /> <br/>
  
        <label for="email">이메일  </label>
        <Input type="email" name="email" /> <br/>
  
        <InputBtn type="submit" value="Submit" id="RegistBtn" />
    </form>
    </SignStyle>
    </>
);
}
}
export default Signup;