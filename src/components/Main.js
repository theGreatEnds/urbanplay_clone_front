import React from "react"
import styled from "styled-components"

const Wrap=styled.div`
    background-image:url(${props=>props.imgurl});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 722px;
    background-position: 50% 50%;
    
`

//줄바꿈 나중에 구현
const TextWrap=styled.div`
    position: absolute;
    width: 100%;
    margin-top: 350px;
    color: white;
    word-break: break-all;
    text-align:${props=>props.align};
    h2{
        font-size:24px;
        
    }
    span{
        width:270px;
        font-size: 14px;
    }
`

const Main = ({imgurl,index,title,content})=>{
    const align = index %2 ? 'left' : 'right'
    return(
        <>
        <Wrap imgurl={imgurl} id={index} >
            <TextWrap align={align}>
                <h2>
                    {title}
                </h2>
                <span>
                    {content}
                </span>
            </TextWrap>
        </Wrap>
        </>
    )
}
export default Main