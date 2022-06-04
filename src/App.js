import React , { Component } from "react";
import {Reset} from 'styled-reset';


import Main from "./Main"
import MainText from "./MainText";
import Header from "./Header"
import SideIndex from "./SideIndex";


function App() {
  
  const http="https://cdn.imweb.me/thumbnail/"
  

  return (
    <>
    <Reset/>
    <Header/>
    <SideIndex/>
    
    <Main imgurl={`${http}20210818/cb7dd9025a008.png`} index={1}>
      <MainText title_txt={<img className='header_logo' src='/img/main/logo.png' alt='urbanplay'></img>}
      content_txt={'어반플레이는 "도시에도 OS가 필요하다"라는 슬로건 아래,다양한 라이프스타일 크리에이터의 상품과 서비스가 사업화될 수 있도록 온/오프라인 플랫폼 서비스를 제공합니다.'}/>
    </Main>
    <Main imgurl={`${http}20210817/057f1b2847887.png`} index={2}>
      <MainText title_txt={"도시에도 OS가 필요하다"}
      content_txt={'콘텐츠의 가치가 비즈니스적인 가치로 이어져 지속적인 비즈니스가 이루어질 수 있도록 합니다.'}/>
    </Main>
    <Main imgurl={`${http}20210817/4351541adfb12.jpg`} index={3}>
    </Main>
    <Main imgurl={`${http}20210819/de65e7d2c821f.png`} index={4}>
    </Main>
    <Main imgurl={`${http}20210817/fb94a96f9f061.jpg`} index={5}>
    </Main>
    <Main index={6}>
    </Main>
    <button className="target">버튼!</button>
    
    </>
  );
}

export default App;