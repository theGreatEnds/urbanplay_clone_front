import React from 'react';
import styled from 'styled-components';

const Group = styled.div`
  border-top:0px;
  border-top: 1px solid #262626;
  background-color: black;
  color:white;
  font-size: 12px;  
  font-family: 'helvetica','GothicA1','Apple SD Gothic Neo', 'Malgun Gothic','Nanum Gothic', 'Noto Sans','sans-serif';
`;
const Span = styled.div`
font-weight: 900;
font-size: 16px;
`;
const Site = styled.div`
height: 220px; 
background-size: 220px; 
background-repeat: no-repeat;
min-height: 220px;  
display: inline-table;     
width:220px;
`;
const P=styled.p`
line-height:40px;
margin-left:20px;
`;


function RecruitItem({ name, explain , text2}) {
  return (
    <>
    <Group>
      <br/>  
      <P><Span>{name}</Span></P>
      <P><strong>{explain}</strong></P>
      {text2.map((text, index) => 
      <Site style={{backgroundImage: 'url("https://cdn.imweb.me/thumbnail/20210802/'+text.url+'.png")'}}/>)}
    </Group>
    </>
  );
}

export default RecruitItem;