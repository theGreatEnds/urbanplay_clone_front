import React from "react"
import './Main.css'


const Main = ({imgurl,index,children})=>{
    const css = {
        backgroundImage:`url(${imgurl})`
    }

    return(
        <>
        <div className="bg" id={index} style={css}>
        {children}
        </div>
        </>
    )
}
export default Main