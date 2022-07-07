import React from 'react';
import styled from 'styled-components';

const Title = styled.li`
display: inline-block;
list-style: none;
width: 60%;`;
const Nont = styled.li`
display: inline-block;
list-style: none;
color:rgba(201, 224, 253, 0.3);
line-height:25px;
width: 15%;`;
const Ul= styled.ul`
padding: 10px 15px 15px 15px;
display: block;
border-bottom: 1px solid #262626;`;

function PressItem({name, date, title}) {
  return (  
    <Ul>
       <Title>{title}</Title>
       <Nont> {name}</Nont>
       <Nont>{date}</Nont> 
    </Ul>
  );
}

export default PressItem;
