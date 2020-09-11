import styled from 'styled-components'

export const ButtonContainer = styled.div`
    margin: 10px;
    position: absolute;
    bottom: 5px;
    left: 76px;

    button {
        color: #F00;
        font-size: 40px;
        margin-right:70px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid #F00;
        outline: none;
        cursor: pointer;
        transition: background 500ms;

            :hover {
                background-color: #F00;
                color: #FFF;
            }
    }

    button:nth-child(2){
        color: #0F0;
        border: 1px solid #0F0;

            :hover {
                background-color: #0F0;
                color: #FFF;
            }
    }

`