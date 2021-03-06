import React  from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Pc } from './common/MediaQuery';




const Wrap=styled.header`
padding: 20px 5vw 20px 5vw;
width: 90vw;
position: fixed;
top: 0;
left: 0;
}
`
const Head=styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    img{
        width: 192px;
        height: 20px;
    }
`

const Menus=styled.div`
    display: flex;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0px;
    align-items:center;
   height:50px;
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
    height: 100%;
`

const Menu = styled.div`
    color: white;
`

const SignBox=styled.div`
display:flex;
margin-top:0px;
`
const SignupText=styled.span`
    margin-left : 30px;
    color: white;
    border: 1px solid white;
`

const Header=()=>{
    return(
        <>
        <Pc>
        <Wrap>
            <Head>
                <Link to='/'>
                    <Img src={process.env.PUBLIC_URL + '/img/main/logo.png'} /> 
                </Link>
                <Trans>ENG!</Trans>
            </Head>
            <Menus>
                <Ul>
                    <Li>
                        <Link to='/AboutOS' style={{textDecoration:'none'}}>
                            <Menu>
                                About OS
                            </Menu>
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/Brand' style={{textDecoration:'none'}}>
                            <Menu>
                                Brand
                            </Menu>
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/Project' style={{textDecoration:'none'}}>
                           <Menu>
                            Project
                           </Menu>
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/Press' style={{textDecoration:'none'}}>
                         <Menu>
                            Press
                         </Menu>
                        </Link>
                    </Li>
                    <Li>
                        <Link to='/Contact' style={{textDecoration:'none'}}>
                           <Menu>
                            Contact
                           </Menu>
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
            </Menus>
            
         </Wrap>
         </Pc>
           </>
    )
}


export default Header;