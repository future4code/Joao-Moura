import styled from 'styled-components'

export const PhotoContainer = styled.div `
    width: 90%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 390px;
    margin: 0 auto;
    background-image: ${props=> `url(${props.background})` };
    box-shadow: 0px 0px 5px 0px #0e3842;
    border-radius: 5px;

    img {
        width: 94%;
        height: 95%;
        object-fit:fill;
    }
`

export const InfoContainer = styled.div`
    position: absolute;
    bottom: 10px;
    left: 15px;
    color: #fff;

    h2{
        margin: 5px;
    }

    p {
        margin: 5px;
    }
`