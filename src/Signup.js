import React from 'react'
import './Signup.css'

const Signup = ()=>{
return(
<div id="sign" >
<form>
      <label for="id">아이디 </label>
      <input type="id" name="id"  /> <br/>

      <label for="password">비밀번호 </label>
      <input type="password" name="password" /> <br/>

      <label for="password">비밀번호 확인 </label>
      <input type="password" name="password" /> <br/>

      <label for="name">이름  &nbsp;&nbsp; </label>
      <input type="text" name="name"  /> <br/>

      <label for="nickname" class="margin">닉네임 </label>
      <input type="nickname" name="nickname" id="nickname" /> <br/>

      <input type="button" value="sign up" id="RegistBtn" />
  </form>
  </div>
)
}
export default Signup;