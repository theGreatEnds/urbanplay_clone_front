import React from 'react'
import './SideIndex.css'

const SideIndex=()=>{
    
    const toggleIndex=(e)=>{
        console.log(e.target.className)
        e.target.classList.toggle('active')
    }
    return(
        <>
        <ul className='SideUl'>
            <li className='SideLi'>
                <a href="#1">
                    <span className='SideIndex active' onClick={toggleIndex} ></span>
                </a>
            </li>
            <li className='SideLi'>
                <a href="#2">
                    <span className='SideIndex' onClick={toggleIndex}></span>
                </a>
            </li>
            <li className='SideLi'>
                <a href="#3">
                    <span className='SideIndex' onClick={toggleIndex}></span>
                </a>
            </li>
            <li className='SideLi'>
                <a href="#4">
                    <span className='SideIndex' onClick={toggleIndex}></span>
                </a>
            </li>
            <li className='SideLi'>
            <a href="#5">
                    <span className='SideIndex' onClick={toggleIndex}></span>
                </a>
            </li>    
            <li className='SideLi'>
            <a href="#6">
                    <span className='SideIndex' onClick={toggleIndex}></span>
                </a>
            </li>   
        </ul>
        
        
        </>
    )
}

export default SideIndex