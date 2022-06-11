import { render } from '@testing-library/react';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SignStyle from './SignStyle';
import styled from 'styled-components';

const Input = styled.input`
margin-top: 15px;
width: 150px;
height: 30px;
border: 1px solid silver;
`;
const InputBtn = styled(Input)`
margin-top: 30px;
width: 230px;
`;
const Li = styled.li`
width: 110px;
text-align:center;
color: #888;
height: 30px;
font-size :14px;
display:inline-flex;
`;
const Li2=styled(Li)`
border-left: 1px solid black;
width: 6px;
height :20px;
margin-top:10px;
margin-right: 20px;
`;
const Img=styled.img`
margin : 0 25px;
`;


class Login extends React.Component {
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
      <form  action="" method="post" name="signin" >
          <label for="id">아이디 &nbsp;&nbsp; </label> 
          <Input type="id" name="id"  /> <br/>
          <label for="password">비밀번호 </label>
          <Input type="password" name="password" /><br/>
          <InputBtn type="submit" value="Submit" id="RegistBtn" />
      </form>
      <div id='moresign'>   
      <ul>
      <Link to='/Find' style={{textDecoration:'none'}}><Li className='moresign_li'>비밀번호 찾기</Li></Link>
      <Li2 className='moresign_li'></Li2> 
      <Link to='/Signup' style={{textDecoration:'none'}}><Li className='moresign_li'> 회원가입 하기</Li></Link>
      </ul> 
      <br/><br/><br/>

      <div> 
      <p> &nbsp;  SNS 계정으로 로그인 &nbsp; </p>
      <br/>
      <Img src="../img/login/ic_kakao.svg" alt="카카오톡" />
      <Img src="../img/login//ic_google.svg" alt="구글" />
      <Img src="../img/login//ic_naver.svg" alt="네이버" />
      </div>      
      </div>
      </SignStyle>
);
}}
export default Login;