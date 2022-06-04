import React from 'react'

import './sign.css'
const Find = ()=>{

return(

<div className="sign" >
<form action="" method="post" name="findPW">

<label for="id">아이디 입력 : </label>
<input type="id" name="id"  /> <br/>

<label for="name">이름 입력  : </label>
<input type="text" name="name"  /> <br/>


<br/>
<input type="button" value="find password" id="RegistBtn" style={{marginTop: '150px;'}} />
</form>
</div>
)
}

export default Find;