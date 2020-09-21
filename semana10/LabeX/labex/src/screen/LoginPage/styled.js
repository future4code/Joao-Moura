import styled from 'styled-components'

export const LoginContainer = styled.div`
background-color: #EEE;
height: 100vh;
width: 100vw;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Form = styled.div`
background-color: #FFF;
width: 35%;
min-width:300px;
height: 45%;
padding: 10px;
`

export const Email = styled.div`
display: flex;
flex-direction: column;
font-size: 22px;
width: 100%;
height: 30%;
`
export const Password = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 30%;`

export const InputEmail = styled.input`
width: 80%;
height: 30%;
background-color: #EEE;
border: none;
`
export const InputPassword= styled.input`
width: 80%;
height: 30%;
background-color: #EEE;
border: none;
`

export const BtnLogin = styled.button`
width: 25%;
height: 15%;
background-color:  #4083ff;
color: #fff;
font-size: 20px;
border: none;
cursor: pointer;
`

