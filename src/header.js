import React from 'react'

const Header = () =>{
    
    return(
        <nav class = "nav_wrap">
            <div class = "nav_header">
                <div class = "nav_logo">

                </div>
                <div class = "nav_translate_btn">

                </div>
            </div>
            <div class = "nav_menubar">
                <ul calss = "nav_menu">
                    <li><a href = "#">About OS</a></li>
                    <li><a href = "#">Brand</a></li>
                    <li><a href = "#">Project</a></li>
                    <li><a href = "#">Press</a></li>
                    <li><a href = "#">Contact</a></li>
                </ul>
                <div calss = "nav_signup">
                    <form>
                        <button>SignUp</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header