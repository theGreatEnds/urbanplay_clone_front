import React from 'react'
import './Header.css'

const Header=()=>{
    return(
        <header className = "nav_wrap">
            <div className='header'>
                <img className='header_logo' src='/img/main/logo.png' alt='urbanplay'></img>
                <div className='translate'>ENG</div>
            </div>
            <div className='menubar'>
                <ul className='menu_ul'>
                    <li className='menu_li'>
                        <a className='menu_name' href='/aboutos'>
                            About OS
                        </a>
                    </li>
                    <li className='menu_li'>
                        <a className='menu_name' href='/brand'>
                            Brand
                        </a>
                    </li>
                    <li className='menu_li'>
                        <a className='menu_name' href='/project'>
                            Project
                        </a>
                    </li>
                    <li className='menu_li'>
                        <a className='menu_name' href='/press'>
                            Press
                        </a>
                    </li>
                    <li className='menu_li'>
                        <a className='menu_name' href='/contact'>
                            Contact
                        </a>
                    </li>
                </ul>
                <a className='menu_login' href ="/signup">
                    <span className='menu_login_text'>SignUp</span>
                </a>

            </div>
        </header>
    )
}


export default Header