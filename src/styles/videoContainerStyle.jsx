import styled, {css} from "styled-components";

export const VideoContainer = styled.div`
    border: 1px solid black;
    width: 60%;
    height: auto;
    left: 200px; 
    bottom: 0;
    background-size: contain;
    overflow: hidden;
    transform: {rotateY(${(props) => props.xAxis}deg) };
    /* rotateX(${(props) => props.yAxis}deg); */
@media (min-width: 1024px){
    max-width: 960px;
}
@media (min-width: 1216px){
    max-width: 1152px
}
@media (min-width: 1408px){
    max-width: 1244px
}
${props => props.fluid && css`
    padding:0;
    margin:0;
    max-width:100%;
`}
`