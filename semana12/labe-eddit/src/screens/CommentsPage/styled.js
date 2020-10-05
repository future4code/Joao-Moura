import styled from 'styled-components';

export const ContentDetail = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const BtnLogout = styled.button`
padding: 5px;
border: 1px solid #FF74D4;
background-color: #FFDDE1;
color:#fff;
border-radius: 5px;
position: absolute;
right: 30px;
top: 10px;
cursor: pointer;
:hover {
    color:#FF74D4;
}
`;
