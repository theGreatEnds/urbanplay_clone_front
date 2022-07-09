import React, { useReducer, createContext, useContext } from 'react';

const initialrecruit = [
  {
    id: 1,
    name: '크리에이티브 1그룹',
    explain: '기록 및 출판과 관련된 콘텐츠를 활용하여 브랜드/프로젝트를 기획하고 운영합니다.',
    text2:[
      {name:'girok_mansion', url :'fc5d524f0acc7'},
      {name:'fyi', url :'9971f73960988'},
      {name:'jungeum_tv', url :'07e2bca45c2ef'}
    ]
  },
  {
    id: 2,
    name: '크리에이티브 2그룹',
    explain: '예술과 문화와 관련된 콘텐츠를 활용하여 브랜드/프로젝트를 기획하고 운영합니다.',
      text2:[
      {name:'yeonnam_hotel', url :'546b9de46265a'},
      {name:'cabinet_club', url :'f04f755f3abf0'},
      {name:'stable_seongsu', url :'6f0a7c5c9865d'},
      {name:'small_glass', url :'91c532600dd8e'}
    ]
  },
  {
    id: 3,
    name: '크리에이티브 3그룹',
    explain: 'F&B 및 공예와 관련도니 콘텐츠를 활용하여 브랜드/프로젝트를 기획하고 운영합니다.',
      text2:[
      {name:'yeonnam_bangagan', url :'7cefbf3352f98'},
      {name:'yh_grand_park', url :'1054a0e775b52'},
      {name:'yh_cooking_lounge', url :'0ba6cf4aaed54'},
      {name:'sagye_life', url :'52cba04be3ac3'}
    ]
  },
  {
    id: 4,
    name: '커뮤니케이션 그룹',
    explain: '각종 프로젝트 및 사업,자사 공간 운영을 지원하고 사내 시스템과 자원을 관리합니다.',
      text2:[
      {name:'i_know_here', url :'c4a23f365a52a'},
      {name:'cabinet_club', url :'f04f755f3abf0'},
      {name:'stable_seongsu', url :'6f0a7c5c9865d'},
      {name:'small_glass', url :'e978b0529de16'}
    ]
  }
];

function recruitReducer(state) {}
const RecruitStateContext = createContext();

export function RProvider({ children }) {
const [state] = useReducer(recruitReducer, initialrecruit);
return (
    <RecruitStateContext.Provider value={state}>
                {children}
    </RecruitStateContext.Provider>
  );
}

export function useState() {
  const context = useContext(RecruitStateContext);
  if (!context) {
    throw new Error('Cannot find recruitProvider');
  }
  return context;
}