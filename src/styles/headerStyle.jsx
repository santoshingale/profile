import styled from 'styled-components'

export const HeaderNav = styled.div`
    position: absolute;
    top: 35px;
    right:0;
    left:0;
    height:0px;
    width:100%;
`

export const Logo = styled.div`
    display:flex;
    align-items:center;
    a{
        font-size:1.8rem;
        font-weight:800;
        color: ${props=> props.theme.text}
    }
    span{
        background-color:red;
        border-radius:100%;
        padding: 0.2rem 0rem;
        font-size:0.8rem;
        font-weight:800;
        cursor: pointer;
        color: ${props=> props.theme.text}
    }
`

export const Menu = styled.div`
    button{
        background: none;
        outline: none;
        border: none;
        margin: 20px;
        transform-origin:center;
        span{
            width: 36px;
            height: 5px;
            display: block;
            background: ${props=> props.theme.text};
            margin:5px;
        }
    }
`