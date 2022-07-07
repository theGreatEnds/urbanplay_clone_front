import React from 'react';
import PressItem from './PressItem';
import { useState } from '../PressContext';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'helvetica','GothicA1','Apple SD Gothic Neo', 'Malgun Gothic','Nanum Gothic', 'Noto Sans','sans-serif';
    background-color: black;
    color: white;
    font-size: 12px;    
  }
`;

function Press() {
  const items = useState();
    return (
   <>
   <GlobalStyle/>
      {items.map(item => (             
        <PressItem
          name={item.name}
          title={item.title}
          date={item.date}
        />      
      ))}
 </>
  );
}
export default Press;
