import styled from 'styled-components'

export const DetailsContent = styled.div `
background-color: #1d3557;
display: flex;
align-items: center;
margin: 10px;
color: #FFF;
`
export const Details = styled.div `
background-color: #1d3557;
width: 30%;
height:450px;
padding: 10px;
box-sizing: border-box;
`
export const CandidatesList = styled.div `
background-color: #457b9d;
width: 35%;
height:450px;
padding: 10px;
box-sizing: border-box;
`

export const ContainerItem = styled.div `
background-color: #fff;
color:#1d3557;
display: flex;
align-items: center;
justify-content: space-around;
width: 90%;
padding: 10px;
box-sizing: border-box;
margin: 10px;
cursor: pointer;
:hover{
    background-color: #eee;
}
`

export const BtnTrue = styled.button `
    border: 1px solid #fff;
    cursor: pointer;
    padding: 5px;
    background-color: #047908;
    color: #FFF;
    border-radius: 5px;
    :hover{
        background-color: #eee;
        color: #047908;
        border: 1px solid #047908;
    }
`
export const BtnFalse = styled.button `
    border: 1px solid #fff;
    cursor: pointer;
    padding: 5px;
    background-color: #d63d10;
    color: #FFF;
    border-radius: 5px;
    :hover{
        background-color: #eee;
        color: #d63d10;
        border: 1px solid #d63d10;
    }
`

export const CandidateInfo = styled.div `
background-color: #1d3557;
width: 30%;
height:450px;
padding: 10px;
box-sizing: border-box;
`