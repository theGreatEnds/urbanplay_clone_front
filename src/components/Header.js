import React  from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Wrap=styled.header`
padding: 20px 5vw 20px 5vw;
width: 90vw;
position: fixed;
top: 0;
left: 0;
}
`
const Head=styled.div`
    position: relative;
    color: white;
    display: flex;
    justify-content: space-between;
    img{
        width: 192px;
        height: 20px;
    }

`
const Menu=styled.div`
    display: flex;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0px;
    justify-content: space-between;
    
    }
`

const Img=styled.img`
    width: 192px;
    height: 20px;
`

const Trans=styled.div``

const Ul=styled.ul`
    display: flex;
    position: relative;
`
const Li=styled.li`
    width: 130px;
    height: 50px;
`

const Name = styled.div`
    position:absolute;
    top: 50%;
    transform: translateY(-50%);
    text-decoration: none;
    color: white;
`

const SignBox=styled.div``
const SignupText=styled.span`
    font-size: 16px;
    margin-left : 30px;
   
    color: white;
    border: 1px solid white;
`

const Header=()=>{
    return(
        <>
        <Wrap>
            <Head>
                <Link to='/'>
                    <Img src='/img/main/logo.png'/>
                </Link>
                <Trans>ENG!</Trans>
            </Head>
            <Menu>
                <Ul>
                    <Li>
                        <Link to='/AboutOS'>
                            <Name>
                                About OS
                            </Name>
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/Brand'>
                            <Name>
                                Brand
                            </Name>
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/Project'>
                           <Name>
                            Project
                           </Name>
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/Press'>
                         <Name>
                            Press
                         </Name>
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/Contact'>
                           <Name>
                            Contact
                           </Name>
                        </Link>
                    </Li>
                </Ul>
               
                <SignBox>
                 <Link to='/SignUp' className='menu_login' style={{textDecoration:'none'}}>
                        <SignupText> &nbsp;SignUp </SignupText> 
                 </Link>
                 <Link to='/Login' className='menu_login' style={{textDecoration:'none'}}>
                        <SignupText> &nbsp;Login&nbsp; </SignupText> 
                 </Link>
                </SignBox>
            </Menu>
         </Wrap>
           </>
    )
}


export default Header;