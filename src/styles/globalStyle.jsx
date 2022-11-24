import styled, { css } from 'styled-components'

export const Container = styled.div`
    flex-grow:1;
    margin: 0 auto;
    position:relative;
    padding: 0 32px;
    width: auto;
    height: 100vh;
    @media (min-width: 1024px){
        max-width: 960px
    }
    @media (min-width: 1216px){
        max-width: 1152px
    }
    @media (min-width: 1408px){
        max-width: 1244px
    }
    /* @media (min-width: 720px){
    max-width: 650px
    } */
    ${props => props.fluid && css`
        padding:0;
        margin:0;
        max-width:100%;
    `}
`

export const Flex = styled.div`
  flex: 0 1 auto;
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  /* @media (min-width: 1024px){
        max-width: 960px
    }
    @media (min-width: 1216px){
        max-width: 1152px
    }
    @media (min-width: 1408px){
        max-width: 1244px
    }
    @media (min-width: 720px){
    max-width: 650px
    } */
  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
    ${props =>
    props.flexCenter &&
    css`
      justify-content: center;
    `};
  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `};

`

