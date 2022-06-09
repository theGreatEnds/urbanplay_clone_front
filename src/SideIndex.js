import React from 'react'
import './SideIndex.css'
import { Link } from 'react-scroll'

const SideIndex=()=>{
    
    const toggleIndex=(e)=>{
        console.log(e.target.className)
        e.target.classList.toggle('active')
    }
    return(
        <>
        <ul className='SideUl'>
            <li className='SideLi'>
                <Link to="1" spy={true} smooth={true}>
                    <span className='SideIndex active' onClick={toggleIndex} ></span>
                </Link>
            </li>
            <li className='SideLi'>
            <Link to="2" spy={true} smooth={true}>
                    <span className='SideIndex' onClick={toggleIndex}></span>
                </Link>
            </li>
            <li className='SideLi'>
                <Link to="3" spy={true} smooth={true}>
                    <span className='SideIndex' onClick={toggleIndex}></span>
                </Link>
            </li>
            <li className='SideLi'>
                <Link to="4" spy={true} smooth={true}>
                    <span className='SideIndex' onClick={toggleIndex}></span>
                </Link>
            </li>
            <li className='SideLi'>
            <Link to="5" spy={true} smooth={true}>
                    <span className='SideIndex' onClick={toggleIndex}></span>
                </Link>
            </li>    
            <li className='SideLi'>
            <Link to="6" spy={true} smooth={true}>
                    <span className='SideIndex' onClick={toggleIndex}></span>
                </Link>
            </li>   
        </ul>
        
        
        </>
    )
}

export default SideIndex