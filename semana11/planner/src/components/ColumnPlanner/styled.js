import styled from 'styled-components'

export const Column = styled.div `
background-color: #3083DC;
width: 190px;
display:flex;
flex-direction: column;
align-items:center;
`
export const Task = styled.div `
display:flex;
justify-content: space-between;
align-items: center;
width: 90%;
padding: 5px;
background-color: #FFF;
color: #4E4187;
font-size: 15px;
word-wrap:break-word;
margin: 5px 0; 
p{
    margin: 0;
    padding: 0;
}
`


export const BtnDelete = styled.button`
    background-color: #949494;
    border-radius: 5px;
    font-size: 13px;
    border: 1px solid #949494;
    color: #FFF;
    :hover {
        background-color: #FFF;
        border: 1px solid #F00;
        color: #F00;

    }
`