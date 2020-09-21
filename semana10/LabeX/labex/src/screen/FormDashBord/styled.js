import styled from 'styled-components'


export const FormContainer = styled.div`
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const Form = styled.form `
background-color: #a8dadc;
width: 40%;
height:600px;
padding: 10px;
box-sizing: border-box;

div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 0;
}
`

export const Label = styled.label `
font-size: 20px;
padding: 5px;
`
export const Select = styled.select `
width: 200px;
height: 30px;
`
export const Input = styled.input `
width: 300px;
height: 30px;

`
export const Textarea = styled.textarea `
width: 300px;
height: 80px;
resize: none;

`