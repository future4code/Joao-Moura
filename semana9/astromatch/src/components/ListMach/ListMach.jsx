import React ,{useState, useEffect}from 'react';
import styled from 'styled-components'

import {clear, getMatches} from '../../services/callApi'



export default function ListMatch(props) {

  const [listMatch, setListMatch] = useState([])

  useEffect(()=>{
    handleListMatch()
  },[])

  const handleListMatch = () => {
    getMatches(setListMatch)
  }

  const clearMatch = () => {
    clear()
    handleListMatch()
  }

  return (
    <>
        <List>
          {listMatch.map((profile)=>{
            return(
              <ItemProfile key={profile.id}>
                <img src={profile.photo} alt={profile.photo} />
                <p>{profile.name}</p>
              </ItemProfile>
            )
          })}
        </List>
        <ButtonClear onClick={clearMatch}>Limpar</ButtonClear>
    </>
  );
}


const List = styled.div`
  overflow-y:scroll;
  height: 400px;
`


const ItemProfile = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 50px;
    margin: 10px;
    padding: 10px;
    :hover {
        background-color: #ddd;
    }

    img {
        width: 40px;
        height: 40px;
        border-radius: 50%; 
        margin-right: 10px;
    }
`

const ButtonClear = styled.button`
  width: 200px;
  height: 50px;
  position: absolute;
  bottom: 1px;
  right: 23%;
  background-color: #3771c8;
  color: #fff;
  font-size: 22px;
  border: none;
  border-radius: 15px;
  outline: none;
  cursor: pointer;
  transition: all 500ms;

  :hover{
    background:#1d8fbd;
    transform: translate(0px,-5px);
  }

`