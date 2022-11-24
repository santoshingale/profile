import React from 'react'

//Styled commoponents
import { createGlobalStyle, ThemeProvider } from 'styled-components'
// import { normalize } from 'styled-normalize'


//Component
import Header from './header'

//Context
import { useStateValue } from '../context/StateProvider'
import SideBar from './sideBar'
import { Container } from '../styles/globalStyle'
import Home from './home'

const GlobalStyle = createGlobalStyle`
    * {
    text-decoration: none;
    //   cursor: none;
    }
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
    }
    body {
    font-size: 16px;
    color: ${props => props.theme.text};
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
    }
`

const lightTheme = {
    background: "#fff",
    text: "#000"
}

const darkTheme = {
    background: "#000",
    text: "#fff"
}

const Layout = () => {
    const [{ currentTheme }, dispatch] = useStateValue();
    console.log(currentTheme);
    return (
        <ThemeProvider theme={currentTheme==='lightTheme' ? lightTheme : darkTheme}>

            <Container>
                <Header />
                <GlobalStyle />
                {/* <SideBar /> */}
                <Home></Home>
            </Container>

        </ThemeProvider>
    )
}

export default Layout
