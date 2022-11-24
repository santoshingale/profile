import React from 'react'

//Styled component
import { Container, Flex } from '../styles/globalStyle'
import { HeaderNav, Logo, Menu } from '../styles/headerStyle'
import { Link } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider'



const Header = () => {

    const [{ currentTheme }, dispatch] = useStateValue();

    const dosomething = ()=> {
        dispatch({type:"TOGGELE_THEME" , theme:"lightTheme"})
    }

    return (
        <HeaderNav>
            <Container>
                <Flex spaceBetween noHeight>
                    <Logo>
                        <Link to="/">SmartC</Link>
                        <span onClick={()=>dosomething()}>
                            &lt;/&gt;
                        </span>
                        <Link to="/">ding.in</Link>
                    </Logo>
                    <Menu>
                        <button>
                            <span />
                            <span />
                        </button>
                    </Menu>
                </Flex>
            </Container>
        </HeaderNav>
    )
}

export default Header
