import styled from 'styled-components';

export const ContentNewPost = styled.div`
background-color: #fee;
width:350px;
height: 110px;
padding: 10px;
display: flex;
align-items:center;
justify-content: space-evenly;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-evenly;
  width: 85%;
  height: 100%;
`;

export const InputTitle = styled.input`
  height: 15px;
  width: 75%;
  border-radius: 4px;
`;

export const InputText = styled.input`
  height: 35px;
  width: 75%;
  border-radius: 4px;
`;

export const BtnPost = styled.button`
width: 77%;
  height: 35px;
    cursor: pointer;
  border-radius: 4px;
`;