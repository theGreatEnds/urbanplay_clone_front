import React from 'react'
import { Link } from 'react-scroll'
import styled from "styled-components"

const SideUl=styled.ul`
    position: fixed;
    z-index: 100;
    top: 50%;
    right: 5vw;
`
const SideLi=styled.li`
    height: 10px;
`

const Index=styled.span`
    display: block;
    border-radius: 50%;
    border: 2px solid white;
    width: 5px;
    height: 5px;
`


const SideIndex=()=>{
    return(
        <>
        <SideUl>
            <SideLi>
                <Link to="1" spy={true} smooth={true}>
                    <Index/>
                </Link>
            </SideLi>
            <SideLi>
            <Link to="2" spy={true} smooth={true}>
                    <Index/>
                </Link>
            </SideLi>
            <SideLi>
                <Link to="3" spy={true} smooth={true}>
                    <Index/>
                </Link>
            </SideLi>
            <SideLi>
                <Link to="4" spy={true} smooth={true}>
                    <Index/>
                </Link>
            </SideLi>
            <SideLi>
            <Link to="5" spy={true} smooth={true}>
                    <Index/>
                </Link>
            </SideLi> 
            <SideLi>
            <Link to="6" spy={true} smooth={true}>
                    <Index/>
                </Link>
            </SideLi>
        </SideUl>
        
        
        </>
    )
}

export default SideIndex