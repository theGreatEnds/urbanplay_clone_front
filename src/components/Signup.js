import React,{useState} from 'react'
import axios from 'axios';
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

const Signup=()=>{
  const url = 'http://localhost:8000/api/token/obtain/'
  //reducer로처리할지생각
  const [username,setUsername]=useState("")
  const [password,setPw] = useState("");
  const [name,setName] = useState("");
  const [email,setEmail]=useState("")

  const handlesubmit=async ()=>{
    try{
      axios.post(url,{
        username:{username},
        password:{password},
        name:{name},
        email:{email},
      })
    }
    catch(e){
      console.error(e)
    }
  }

  //useReducer사용?
  const onChangeUsername=({target:{value}})=>setUsername(value)
  const onChangePw=({target:{value}})=>setPw(value)
  const onChangeName=({target:{value}})=>setName(value)
  const onChangeEmail=({target:{value}})=>setEmail(value)

  return( 
  <>

    <Header/>
    <SignStyle>
    <form action="" method="post" name="signup" onsubmit={handlesubmit}>
        <label htmlFor="username">아이디 </label>
        <Input type="username" name="username" onChange={onChangeUsername} /> <br/>
  
        <label htmlFor="password">비밀번호 </label>
        <Input type="password" name="password" onChange={onChangePw}/> <br/>
  
        <label htmlFor="name">이름  &nbsp;&nbsp; </label>
        <Input type="text" name="name"  onChange={onChangeName}/> <br/>
  
        <label htmlFor="email">이메일  </label>
        <Input type="email" name="email" onChange={onChangeEmail} /> <br/>
  
        <InputBtn type="submit" value="Submit" id="RegistBtn" />
    </form>
    </SignStyle>
    </>)
}

export default Signup;