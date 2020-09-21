import styled from 'styled-components'

export const Card = styled.div `
width: 370px;
height: 300px;
background-color: #1d3557;
margin: 20px;
position: relative;

    h2 {
        position: absolute;
        padding: 5px;
        top: 0px;
        left: 0px;
        background-color: rgba(0,0,0,0.5);
    }

img {
    width: 100%;
    height: 60%;
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
}
`
export const Info = styled.div `
width: 100%;
height: 30%;
padding: 5px 10px;

color:#fff;

`
