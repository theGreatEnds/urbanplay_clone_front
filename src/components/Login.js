import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";
import SignStyle from './SignStyle';
import styled from 'styled-components';
import axios from 'axios';

//css영역
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


const Login= ()=>{
  const url='http://localhost:8000/api/token/obtain/';
  const [username,setUsername]=useState("")
  const [password,setPw] = useState("");

  const handleSubmit=async ()=>{
    try{
      axios.post(url,{
        username:{username},
        password:{password},
      })
    }
    catch(e){
      console.error(e)
    }
  }

  //reducer로변환할지 생각필요
  const onChangeUsername=({target:{value}})=>setUsername(value)
  const onChangePw=({target:{value}})=>setPw(value)

 

  return(
  <>
    <Header/>
    <SignStyle>
      <form  action={`${url}`} method="post" name="signin" onSubmit={handleSubmit}>
          <label htmlFor="username">아이디 &nbsp;&nbsp; </label> 
          <Input type="username" name="username" value={username} onChange={onChangeUsername} /> <br/>
          <label htmlFor="password">비밀번호 </label>
          <Input type="password" name="password" value={password} onChange={onChangePw}/><br/>
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
  </>)
  
}

export default Login;