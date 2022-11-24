import styled, {css} from "styled-components";

export const HomeContainer = styled.div`
border: 1px solid white;
border-radius: 20px;
width: 100%;
height: 70%;
display: flex;
align-items: center;
justify-content: end;
/* justify-content: center; */
@media (min-width: 1024px){
    max-width: 960px;
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