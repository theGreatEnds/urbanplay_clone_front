import React from 'react';
import RecruitItem from './RecruitItem';
import { useState } from '../RecruitContext';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'helvetica','GothicA1','Apple SD Gothic Neo', 'Malgun Gothic','Nanum Gothic', 'Noto Sans','sans-serif';
    background-color: black;
    color: white;
    font-size: 12px;    
    margin-top: 150px;
  }
`;

//임시로 header지정
function Recruit() {
  const todos = useState();
    return (
    <>    
      <Header/>
      <GlobalStyle/>
      {todos.map(todo => (      
        <RecruitItem
          key={todo.id}
          id={todo.id}
          name={todo.name}
          explain={todo.explain}
          text2={todo.text2}
        />
      ))}
   </>
  );
}

export default Recruit;
