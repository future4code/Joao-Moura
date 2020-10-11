import styled from 'styled-components';

export const FeedContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFDDE1;
`;

export const BtnLogout = styled.button`
padding: 5px;
border: 1px solid #FF74D4;
background-color: #FFDDE1;
color:#fff;
border-radius: 5px;
position: absolute;
right: 10px;
top: 10px;
cursor: pointer;
:hover {
    color:#FF74D4;
}
`;