import { render } from '@testing-library/react';
import React,{Component} from 'react'
import './sign.css'

class Signup extends React.Component {
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
 <div className="sign" >
  <form  action="" method="post" name="signup" onsubmit="handleSubmit">
        <label for="id">아이디 </label>
        <input type="id" name="id"  /> <br/>
  
        <label for="password">비밀번호 </label>
        <input type="password" name="password" /> <br/>
  
        <label for="name">이름  &nbsp;&nbsp; </label>
        <input type="text" name="name"  /> <br/>
  
        <label for="email">이메일  </label>
        <input type="email" name="email" /> <br/>
  
  
        <input type="submit" value="Submit" id="RegistBtn" />
    </form>
    </div>
);
}
}
export default Signup;