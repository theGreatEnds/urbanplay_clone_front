import React from 'react'
import './Login.css'


const Login = ()=>{
    return(
       <div id="sign" >
      <form>
          <label for="id">아이디 &nbsp;&nbsp; </label> 
          <input type="id" name="id"  /> <br/>
          <label for="password">비밀번호 </label>
          <input type="password" name="password" />
          <input type="button" value="sign in" id="RegistBtn" />
      </form>
      <div id='find'>   
      <ul>
      <li><a href="#!" >비밀번호 찾기  </a></li><li></li> 
      <li><a href="#!" >&nbsp; 아이디 찾기</a></li><li></li> 
      <li><a href="#!" >&nbsp; 회원가입</a></li> 
      </ul> 
      <br/>
   <div> 
       <br/><br/><br/>
     
      <span></span>
      <p> &nbsp;  SNS 계정으로 로그인 &nbsp; </p>
      <span></span>
     <br/>
      <img src="../img/login/ic_kakao.svg" alt="카카오톡" class="snsIcon"/>
      <img src="../img/login//ic_google.svg" alt="구글" class="snsIcon"/>
      <img src="../img/login//ic_naver.svg" alt="네이버" class="snsIcon"/>
   </div>      
      </div>
      </div>
    )
}
export default Login;