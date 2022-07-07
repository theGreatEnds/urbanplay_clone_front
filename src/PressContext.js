import React, { useReducer, createContext, useContext } from 'react';


const initialPress = [
  {title: '제목', name:'글쓴이', date:'날짜'},
  {title:'높은 임대수익률? 입지 보다 중요한 건 이것', name:'땅집고', date:'2022-4-11'},
  {title:'컴퍼니합, 어반플레이와 전략적 제휴 체결',name:'이데일리', date:'2022-3-29'},
  {title:'동네이서 놀자고 판 벌리는 스타트업: 어반플레이', name:'서울프라퍼티인사이트', date:'2022-03-23'}
];

function pressReducer(state) {}
const PressStateContext = createContext();

export function PProvider({ children }) {
const [state] = useReducer(pressReducer, initialPress);
  return (
    <PressStateContext.Provider value={state}>
                {children}
    </PressStateContext.Provider>
  );
}

export function useState() {
  const context = useContext(PressStateContext);
  if (!context) {
    throw new Error('Cannot find pressProvider');
  }
  return context;
}