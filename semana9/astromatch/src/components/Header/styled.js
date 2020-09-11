import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: ${props=> props.page === 2? 'flex-start': 'flex-end'};
    align-items: center;
    position: relative;
    border-bottom: 1px solid #aaa;
    margin-bottom: 10px;
    padding: 15px;
    height: 60px;
    width: 100%;
    box-sizing: border-box;
`
export const Logo = styled.img`
    margin: 5px;
    width: 180px;
    height: 90px;
    position: absolute;
    right: 90px;
`
export const Icon = styled.img`
    box-sizing: border-box;
    width: 32px;
    height: 32px;
    cursor: pointer;

        :hover{
        width: 33px;
        height: 33px;
        }
`