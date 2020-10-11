import styled from 'styled-components';

export const ContentNewComment = styled.div`
  width: 300px;
  height: 80px;
  box-sizing: border-box;
`

export const Form = styled.form`
  display: flex;
  align-items:center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;


export const InputText = styled.input`
  height: 30px;
  width: 100%;
  border-radius: 4px;
  font-size:18px;
`;

export const BtnPost = styled.button`
width: 77%;
  height: 35px;
    cursor: pointer;
  border-radius: 4px;
`;