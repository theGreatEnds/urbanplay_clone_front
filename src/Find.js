import React, {Component}  from 'react';
import styled from 'styled-components';
import SignStyle from './SignStyle';

const Input = styled.input`
margin-top: 15px;
width: 150px;
height: 30px;
border: 1px solid silver;
`;
const InputBtn = styled(Input)`
width: 230px;
`;

class Find extends React.Component {
    constructor(props){
      super(props);
      this.state = {value: ''};
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    
  render(){
    return(
        <SignStyle>
        <form action="" method="post" name="findPW">
        
        <label for="id">아이디 입력 : </label>
        <Input type="id" name="id"  /> <br/>
        
        <label for="name">이름 입력  : </label>
        <Input type="text" name="name"  /> <br/>
        
        <br/>
        <InputBtn type="submit" value="Submit" id="RegistBtn" />
        </form>
        </SignStyle>
  );
  }}
  export default Find;