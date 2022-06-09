import { render } from '@testing-library/react';
import React,{Component} from 'react';
import { Link } from 'react-router-dom';
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
      <form  action="" method="post" name="signin" >
          <label for="id">아이디 &nbsp;&nbsp; </label> 
          <input type="id" name="id"  /> <br/>
          <label for="password">비밀번호 </label>
          <input type="password" name="password" /><br/>
          <input type="submit" value="Submit" id="RegistBtn" />
      </form>
      <div id='moresign'>   
      <ul>
      <Link to='/Find'><li className='moresign_li'>비밀번호 찾기</li></Link>
      <li className='moresign_li'></li> 
      <Link to='/Signup'><li className='moresign_li'>회원가입</li></Link>
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
);
}
}
export default Signup;