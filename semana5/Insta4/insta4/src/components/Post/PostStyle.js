import styled from 'styled-components'

export const PostContainer = styled.div `
    border: 1px solid gray;
    width: 300px;
    margin-bottom: 10px;
`

export const  PostHeader = styled.div `
    height: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 5fr;
    align-items: center;
    padding-left: 10px;
    font-weight: bold;
`

export const UserPhoto = styled.img `
    height: 30px;
    width: 30px;
    margin-right: 10px;
    border-radius: 50%;
`

export const PostPhoto = styled.img `
    width: 100%;
`

export const PostFooter = styled.div `
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
`


