import React from "react";
import './MainText.css'

const MainText=({title_txt,content_txt})=>{

    return(
        <div className="text_wrap">
            <h2>
                {title_txt}
            </h2>
            <span>
                {content_txt}
            </span>
        </div>
    )
}

export default MainText