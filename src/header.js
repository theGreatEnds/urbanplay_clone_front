import React from 'react'
import './Header.css'

const Header=()=>{
    return(
        <header className = "nav_wrap">
            <div className='nav_header'>
                <img src='/img/main/logo.png' alt='urbanplay'></img>
                <div className='nav_translate'>ENG</div>
            </div>
            <div className='nav_menubar'>
                <ul className='nav_menu'>
                    <li><a href='https://www.naver.com/'>About OS</a></li>
                    <li><a href='https://www.naver.com/'>Brand</a></li>
                    <li><a href='https://www.naver.com/'>Project</a></li>
                    <li><a href='https://www.naver.com/'>Press</a></li>
                    <li><a href='https://www.naver.com/'>Contact</a></li>
                </ul>
                <button>SignUp</button>
            </div>
        </header>
    )
}


export default Header