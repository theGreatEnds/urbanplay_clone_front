import React from 'react'

import './Find.css'


const Find = ()=>{

return(

<div id="sign" >
<form>
<div class="find">
<label for="id">아이디 입력 : </label>
<input type="id" name="id"  /> <br/>
</div>

<div class="find">
<label for="name">이름 입력  : </label>
<input type="text" name="name"  /> <br/>
</div>

<br/>
<input type="button" value="find password" id="RegistBtn" />
</form>
</div>
)
}

export default Find;