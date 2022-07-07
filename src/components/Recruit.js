import React from 'react';
import RecruitItem from './RecruitItem';
import { useState } from '../RecruitContext';


//header랑 추가설명 부분 공간 만들기
//header 문의하기 올릴 수 있게 수정
function Recruit() {
  const todos = useState();
    return (
    <>
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
