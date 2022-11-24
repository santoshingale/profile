import React from 'react'
import styled, { css } from 'styled-components'

import { Flex } from '../styles/globalStyle'

const Rotate90 = styled.div`
    position: absolute;
    /* width:100vh; */
    bottom: 0;
    left: 0;
    display:flex;
    justify-content:space-between;
    transform:rotate(270deg) ;
    `

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    /* padding: 15px; */
    color: rgba(black, 0.5);
    display: inline-block;
    `

const SideBar = () => {
    return (
        <Container>
            <Rotate90>
                
                    <h5 style={{ color: "white" ,padding:"10%"}}>hiii santosh</h5>
                    <h5 style={{ color: "white" ,padding:"10%"}}>hiii santosh</h5>
                    <h5 style={{ color: "white" ,padding:"10%"}}>hiii santosh</h5>
                    <h5 style={{ color: "white" ,padding:"10%"}}>hiii santosh</h5>
                    <h5 style={{ color: "white" ,padding:"10%"}}>hiii santosh</h5>
                    <h5 style={{ color: "white" ,padding:"10%"}}>hiii santosh</h5>
            </Rotate90>
        </Container>
    )
}

export default SideBar
