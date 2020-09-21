import styled from 'styled-components'

export const Header = styled.header`
background-color: #457b9d;
height: 100px;
width: 100%;
padding: 10px;
color: #fff;
display: flex;
justify-content: space-between;
align-items: flex-end;
position: relative;
`

export const BntLogout = styled.button`
    padding: 10px;
    background-color: #e63946;
    color: #fff;
    font-size: 16px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 10px;
    :hover {
        color: #F00;
        background-color: #fff;
    }
`


export const NavMenu = styled.div`
display: flex;
justify-content: space-around;
align-items: flex-end;
width: 30%;
height: 50%;

`

export const Link = styled.p`
font-size:22px;
padding: 3px;
color: #fff;
text-decoration: none;
cursor: pointer;
:hover {
    background: #fff;
    color: #000;
}
`