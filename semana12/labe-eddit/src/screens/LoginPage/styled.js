import styled from 'styled-components';

export const ContentLogin = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;

    h2 {
        font-size: 40px;
        line-height: 50px;
        margin: 5px;
    }
  
`;

export const BtnSingUp = styled.button`
width: 80%;
background: none;
border: none;
height: 6%;
font-size: 18px;
line-height: 28px;
cursor: pointer;
    :hover{
        text-decoration-line:underline;
    }
`;