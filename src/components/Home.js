import React from "react";
import Main from "./Main";


import Header from "./Header";
import SideIndex from "./SideIndex";


const http="https://cdn.imweb.me/thumbnail/"
export const datas=[
    {
        id:1,
        url:'20210818/cb7dd9025a008.png',
        title:<img className='header_logo' src='/img/main/logo.png' alt='urbanplay'></img>,
        content:'daff',
    },
    {
        id:2,
        url:'20210817/057f1b2847887.png',
        title:'도시에도 OS가 필요하다',
        content:'콘텐츠의 가치가 비즈니스적인 가치로 이어져 지속적인 비즈니스가 이루어질 수 있도록 합니다.',
    },
    {
        id:3,
        url:'20210817/4351541adfb12.jpg',
        title:'SPACE',
        content:'콘텐츠의 가치가 비즈니스적인 가치로 이어져 지속적인 비즈니스가 이루어질 수 있도록 합니다.'},
    {
        id:4,
        url:'20210819/de65e7d2c821f.png',
        title:'도시에도 OS가 필요하다',
        content:'콘텐츠의 가치가 비즈니스적인 가치로 이어져 지속적인 비즈니스가 이루어질 수 있도록 합니다.',
    },
    {
        id:5,
        url:'20210817/fb94a96f9f061.jpg',
        title:'도시에도 OS가 필요하다!',
        content:'콘텐츠의 가치가 비즈니스적인 가치로 이어져 지속적인 비즈니스가 이루어질 수 있도록 합니다.',
    },
    {
        id:6,
        url:null,
        title:'도시에도 OS가 필요하다',
        content:'콘텐츠의 가치가 비즈니스적인 가치로 이어져 지속적인 비즈니스가 이루어질 수 있도록 합니다.',
    },
]

function Home(){
return(
<>  
    <Header/>
    <SideIndex/>
    {datas.map(data=>
    <Main imgurl={`${http}${data.url}`} index={data.id} key={data.id}
    title={data.title} content={data.content} />
    )}
    
</>
)
}

export default Home