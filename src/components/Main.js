import React from "react"
import './Main.css'


const Main = ({imgurl,index,title,content})=>{
    const css = {
        backgroundImage:`url(${imgurl})`
    }

    return(
        <>
        <div className="bg" id={index} style={css}>
            <div className="text_wrap">
                <h2>
                    {title}
                </h2>
                <span className="content">
                    {content}
                </span>
            </div>
        </div>
        </>
    )
}
export default Main