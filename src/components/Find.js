import React,{useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './Header'
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

const Find =()=>{
  const url = 'http://localhost:8000/api/token/obtain'
  //reducer로처리할지생각
  const [id,setId]=useState("")
  const [name,setName] = useState("")

  const handlesubmit=async ()=>{
    try{
      axios.post(url,{
        username:{id},
        name:{name},
      })
    }
    catch(e){
      console.error(e)
    }
  }

  //useReducer사용?
  const onChangeId=({target:{value}})=>setId(value)
  const onChangeName=({target:{value}})=>setName(value)
  return(
    <>
      <Header/>
      <SignStyle>
        <form action="" method="post" name="findPW" onsubmit={handlesubmit}>
        
        <label htmlFor="id">아이디 입력 : </label>
        <Input type="id" name="id" onChange={onChangeId}/> <br/>
        
        <label htmlFor="name">이름 입력 : </label>
        <Input type="text" name="name" onChange={onChangeName}/> <br/>
        
        <br/>
        <InputBtn type="submit" value="Submit" id="RegistBtn" />
        </form>
      </SignStyle>
    </>
  )
}


  export default Find;