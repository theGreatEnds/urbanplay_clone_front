import React from 'react'
import './sign.css'


const Login = ()=>{
    return(
    <div className="sign" >
      <form  action="" method="post" name="signin" >
          <label for="id">아이디 &nbsp;&nbsp; </label> 
          <input type="id" name="id"  /> <br/>
          <label for="password">비밀번호 </label>
          <input type="password" name="password" /><br/>
          <input type="button" value="sign in" id="RegistBtn" />
      </form>
      <div id='moresign'>   
      <ul>
      <li className='moresign_li'><a href="#!" >비밀번호 찾기  </a></li><li className='moresign_li'></li> 
      <li className='moresign_li'><a href="#!" >&nbsp; 아이디 찾기</a></li><li className='moresign_li'></li> 
      <li className='moresign_li'><a href="#!" >&nbsp; 회원가입</a></li> 
      </ul> 
      <br/>
   <div> 
       <br/><br/><br/>
     
      <span></span>
      <p> &nbsp;  SNS 계정으로 로그인 &nbsp; </p>
      <span></span>
     <br/>
      <img src="../img/login/ic_kakao.svg" alt="카카오톡" classname="snsIcon"/>
      <img src="../img/login//ic_google.svg" alt="구글" classname="snsIcon"/>
      <img src="../img/login//ic_naver.svg" alt="네이버" classname="snsIcon"/>
      </div>      
      </div>
</div>
    )
}
export default Login;