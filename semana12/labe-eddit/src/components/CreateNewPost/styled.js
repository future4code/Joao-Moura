import styled from 'styled-components';

export const ContentNewPost = styled.div`
border: 1px solid #fff;
border-radius: 5px;
max-width:95%;
width: 1000px;
height: 110px;
margin-top: 40px;
padding: 5px;
display: flex;
align-items:center;
justify-content: space-evenly;
`

export const Form = styled.form`
  display: flex;
  align-items:center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 80%;
  height: 100%;
`;

export const InputTitle = styled.input`
  height: 30px;
  width: 230px;
  border-radius: 4px;
`;

export const InputText = styled.input`
  height: 30px;
  width: 230px;
  border-radius: 4px;
`;

export const BtnPost = styled.button`
  width: 77%;
  max-width: 150px;
  height: 35px;
    cursor: pointer;
  border-radius: 4px;
`;