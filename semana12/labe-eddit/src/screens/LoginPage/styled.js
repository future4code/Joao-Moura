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

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 450px;
padding: 0px 10px;
width: 90%;
height: 60%;
background-color: #ddd;

`;

export const ContentInput = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* background-color: #ccc; */
width: 95%;
height: 30%;

    label {
        font-size: 20px;
        line-height: 30px;
    }

    input {
        width: 90%;
        height: 40%;
        font-size: 20px;
    }
`;

export const BtnSubmit = styled.button`
width: 80%;
height: 14%;
margin-top: 6%;
font-size: 20px;
cursor: pointer;
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