import React from "react";
import { useMediaQuery } from "react-responsive";

export const Mobile=({children})=>{
    const isMobile=useMediaQuery({
        query:"(max-width:767px)"
    })
    return <React.Fragment>{isMobile &&children}</React.Fragment>
}

export const Tablet=({children})=>{
    const isTabletPc =useMediaQuery({
        query:"(min-width:768px) and (max-width:1023px)"
    })
    return <React.Fragment>{isTabletPc &&children}</React.Fragment>
}

export const Pc=({children})=>{
    const isPc =useMediaQuery({
        query:"(min-width:1024px)"
    });
    return <React.Fragment>{isPc &&children}</React.Fragment>
}